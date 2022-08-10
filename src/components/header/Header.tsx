import React, { useEffect, useState } from 'react';
import Logo from '../logo/Logo';
import SearchModal from '../modals/SearchModal';

import { ImMenu3, ImSearch } from 'react-icons/im';
import { FaMoon, FaUserCog } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
	const [openSearchModal, setOpenSearchModal] = useState<boolean>(false);
	const [scroll, setScroll] = useState<boolean>(false);

	const { theme, setTheme, systemTheme } = useTheme();

	const toggleTheme = () => {
		const currentTheme = theme === 'system' ? systemTheme : theme;

		if (currentTheme === 'dark') {
			return (
				<BsSunFill
					onClick={() => setTheme('light')}
					className="text-btn hover:text-btnHov"
				/>
			);
		} else {
			return (
				<FaMoon
					onClick={() => setTheme('dark')}
					className="text-btn hover:text-btnHov"
				/>
			);
		}
	};

	const handleScroll = () => {
		window.scrollY > 0 ? setScroll(true) : setScroll(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`h-[10vh] w-screen flex items-center justify-between transition-all ${
				scroll ? 'bg-header' : ''
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
				<ImSearch
					onClick={() => setOpenSearchModal(!openSearchModal)}
					className="hover:text-cta md:hidden text-btn hover:text-btnHov"
				/>
				<FaUserCog className="text-btn hover:text-btnHov" />

				<AiOutlineShoppingCart className="text-btn hover:text-btnHov" />

				{toggleTheme()}
				{/* <ImMenu3 className="lg:hidden text-btn hover:text-btnHov" /> */}
			</div>

			{openSearchModal && <SearchModal />}
		</header>
	);
};
export default Header;
