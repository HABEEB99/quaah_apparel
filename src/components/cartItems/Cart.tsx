import Image from 'next/image';
import React from 'react';
import { useCartStore } from '../../store/cartStore';

import { MdDeleteForever } from 'react-icons/md';
import Link from 'next/link';

type CartProps = {};

const Cart: React.FC<CartProps> = () => {
	const { cart, removeFromCart } = useCartStore();

	return (
		<div className="absolute top-[11vh] ml-4 md:ml-0 right-2 md:right-4 w-[96%] md:w-[20rem] h-[25rem]  shadow-lg shadow-darkBg dark:shadow-lightBg bg-cart p-2 rounded-md">
			<div className="w-full flex items-center justify-center text-2xl text-white font-bold">
				<h2>Cart Items ({cart?.length})</h2>
			</div>
			<div className="overflow-y-scroll !scrollbar-thin h-[20rem] !scrollbar-thumb-btn hover:!scrollbar-thumb-btnHov">
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
								<span className="text-gray-100 text-sm">{product.name}</span>
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
			<Link href="/cart" passHref>
				<div className="w-full px-4 absolute bottom-2 left-0 mt-2">
					<button className="w-full h-10 rounded-full text-white bg-btn hover:bg-btnHov text-2xl font-bold">
						Proceed To Cart Page
					</button>
				</div>
			</Link>
		</div>
	);
};
export default Cart;
