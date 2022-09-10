import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import PagesLayout from "../../components/layout/PagesLayout";
import Stages from "../../components/stages/Stages";
import { useCartStore } from "../../store/cartStore";
import { useOrderDetails } from "../../store/orderDetailsStore";

type PlaceOrderProps = {};

const PlaceOrder: React.FC<PlaceOrderProps> = () => {
  const router = useRouter();
  const { cart, removeFromCart, emptyCart } = useCartStore();
  const { userOrderDetails } = useOrderDetails();
  if (!cart.length) {
    router.push("/products");
  }
  const itemsCost = () => {
    const totalSum = cart.reduce(
      (acc, val) => acc + val.price * val.quantity,
      0
    );

    return totalSum;
  };

  const shippingCost = itemsCost() >= 50000 ? 5000 : 1000;

  const totalCost = itemsCost() + shippingCost;

  const placeOrder = async () => {};
  return (
    <PagesLayout title="PLACE YOUR ORDER" description="Place your order">
      <Stages stage={3} />
      <div className="flex flex-col items-center space-y-4  w-full h-[90vh]">
        <div className="w-full h-[60%] flex flex-col space-y-4 md:space-y-0 md:flex-row space-x-0 md:space-x-6">
          <div className="w-full md:w-[50%] h-full bg-cart space-y-4 rounded-md p-3 md:p-5">
            <h3 className="text-base text-gray-300">
              Full Name:
              <span className="text-sm text-gray-100 font-bold pl-2">
                {userOrderDetails?.fullName}
              </span>
            </h3>

            <h3 className="text-base text-gray-300">
              Address:
              <span className="text-sm text-gray-100 font-bold pl-2">
                {userOrderDetails?.address}
              </span>
            </h3>

            <h3 className="text-base text-gray-300">
              Country:
              <span className="text-sm text-gray-100 font-bold pl-2">
                {userOrderDetails?.country}
              </span>
            </h3>

            <h3 className="text-base text-gray-300">
              City:
              <span className="text-sm text-gray-100 font-bold pl-2">
                {userOrderDetails?.city}
              </span>
            </h3>

            <h3 className="text-base text-gray-300">
              Postal Code:
              <span className="text-sm text-gray-100 font-bold pl-2">
                {userOrderDetails?.postalCode}
              </span>
            </h3>
          </div>
          <div className="w-full md:w-[50%] h-full bg-green-500 rounded-md p-3">
            <div className="w-full flex items-center justify-center text-2xl text-white font-bold">
              <h2>Items ({cart?.length})</h2>
            </div>
            <div className="overflow-y-scroll !scrollbar-thin  h-[90%] !scrollbar-thumb-btn hover:!scrollbar-thumb-btnHov">
              {cart.map((product) => (
                <div className="mt-2 flex space-x-6 items-center justify-between">
                  <div className="relative w-16 h-16 rounded-md">
                    <Image
                      src={product.image}
                      alt="Product Image"
                      objectFit="cover"
                      layout="fill"
                      className="rounded-md"
                    />
                  </div>

                  <div className="flex flex-1 justify-between space-x-4">
                    <div className="flex flex-col items-start justify-self-start">
                      <span className="text-gray-100 text-sm">
                        {product.name}
                      </span>
                      <span className="text-gray-200 font-bold">
                        #{product.price}
                      </span>
                    </div>
                    <div
                      onClick={() => removeFromCart(product)}
                      className="cursor-pointer"
                    >
                      <MdDeleteForever className="mr-2 text-2xl font-bold text-red-300 hover:text-red-700" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full space-y-4 md:w-[50%] min-h-[25%] bg-desc rounded-md p-2">
          <h3 className="text-base text-gray-300">
            Items Cost:
            <span className="text-sm text-gray-100 font-bold pl-2">
              #{itemsCost()}
            </span>
          </h3>

          <h3 className="text-base text-gray-300">
            Shipping Cost:
            <span className="text-sm text-gray-100 font-bold pl-2">
              #{shippingCost}
            </span>
          </h3>

          <h3 className="text-base text-gray-300">
            Total Cost:
            <span className="text-sm text-gray-100 font-bold pl-2">
              #{totalCost}
            </span>
          </h3>

          <button className="w-full h-10 text-white font-bold rounded-full bg-btn hover:bg-btnHov">
            Place Order
          </button>
        </div>
      </div>
    </PagesLayout>
  );
};

export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false });
