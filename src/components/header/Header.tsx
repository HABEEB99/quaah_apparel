import React, { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import SearchModal from "../modals/SearchModal";

import { ImMenu3, ImSearch } from "react-icons/im";
import { FaMoon, FaUserCog } from "react-icons/fa";
import { useTheme } from "next-themes";
import { BiLogOutCircle } from "react-icons/bi";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useAuthStore } from "../../store/authStore";
import { createOrGetUser } from "../../utils/createOrGetUser";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useCartStore } from "../../store/cartStore";
import Cart from "../cartItems/Cart";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { cart } = useCartStore();
  const { user, addUser, removeUser } = useAuthStore();

  const [openLoginBtn, setOpenLoginBtn] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [openLogoutBtn, setOpenLogoutBtn] = useState<boolean>(false);
  const [openSearchModal, setOpenSearchModal] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  const handleUserLogin = () => {
    setOpenLoginBtn((prev) => !prev);
  };

  const handleUserLogOut = () => {
    googleLogout();
    removeUser();
    setOpenLogoutBtn((prev) => !prev);
  };

  const { theme, setTheme, systemTheme } = useTheme();

  const toggleTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsSunFill
          onClick={() => setTheme("light")}
          className="text-btn hover:text-btnHov cursor-pointer"
        />
      );
    } else {
      return (
        <FaMoon
          onClick={() => setTheme("dark")}
          className="text-btn hover:text-btnHov cursor-pointer"
        />
      );
    }
  };

  const handleScroll = () => {
    window.scrollY > 0 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`h-[10vh] w-screen flex items-center justify-between transition-all ${
        scroll ? "bg-header" : ""
      }  space-x-2 md:space-x-4 lg:space-x-8 px-3 sm:px-4 md:px-12 lg:px-32 fixed z-[10] top-0`}
    >
      <Logo />

      <div className="hidden  md:flex h-10 space-x-3 flex-1 items-center rounded-full border-2 border-gray-300 bg-gray-200 px-4 hover:border-btn ">
        <ImSearch className="text-xl font-bold text-btn" />
        <input
          type="text"
          placeholder="Search for an item"
          className=" flex-1 bg-transparent outline-none"
        />
      </div>

      <div className="flex items-center space-x-3 text-lg md:text-2xl">
        {user ? (
          <div
            onClick={() => setOpenLogoutBtn((prev) => !prev)}
            className="min-w-[5rem] h-8 flex items-center space-x-1 justify-center cursor-pointer rounded-md bg-gray-300"
          >
            <div className="w-6 h-6 rounded-full relative">
              <Image
                src={user.picture}
                alt="User Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <span className="text-xs text-gray-700">{user.userName}</span>
          </div>
        ) : (
          <FaUserCog
            onClick={handleUserLogin}
            className="text-btn hover:text-btnHov cursor-pointer"
          />
        )}

        <ImSearch
          onClick={() => setOpenSearchModal(!openSearchModal)}
          className="hover:text-cta md:hidden text-btn hover:text-btnHov cursor-pointer"
        />

        <div onClick={() => setOpenCart((prev) => !prev)} className="relative">
          <AiOutlineShoppingCart className="text-btn hover:text-btnHov cursor-pointer" />
          <span className="absolute -top-3 font-bold left-2 text-cart rounded-full w-4 h-4 text-[0.5rem] bg-yellow-300 flex items-center justify-center">
            {cart.length}
          </span>
        </div>

        {toggleTheme()}
      </div>

      {openSearchModal && <SearchModal />}
      {openCart && <Cart />}
      {openLoginBtn && (
        <div className="absolute top-[11vh] right-4 md:right-12 lg:right-32 w-80 h-24 z-10 rounded-md bg-header flex items-center justify-center">
          <GoogleLogin
            onSuccess={(response) => {
              createOrGetUser(response, addUser);
              setOpenLoginBtn(false);
            }}
            onError={() => console.log("An error occured")}
          />
        </div>
      )}

      {openLogoutBtn && (
        <div className="absolute top-[11vh] right-4 md:right-12 lg:right-32 w-80 h-24 z-10 rounded-md bg-header flex items-center justify-center">
          <div className="w-full px-4">
            <button
              onClick={handleUserLogOut}
              className="w-full flex items-center justify-center h-10 rounded-full bg-red-500 hover:bg-red-700 text-white font-bold text-xl"
            >
              <BiLogOutCircle className="mr-1" />
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
