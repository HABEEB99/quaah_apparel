import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import toast from 'react-hot-toast';

import { GrFormAdd, GrFormSubtract } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import PagesLayout from '../../components/layout/PagesLayout';
import { useAuthStore } from '../../store/authStore';
import { useCartStore } from '../../store/cartStore';
import { urlFor } from '../../utils/sanity';

type CartPageProps = {};

const CartPage: React.FC<CartPageProps> = () => {
	const router = useRouter();

	const { user } = useAuthStore();
	const {
		cart,
		removeFromCart,
		increaseProductQuantity,
		decreaseProductQuantity,
	} = useCartStore();

	const totalSum = () => {
		const sum = cart.reduce((val, acc) => val + acc.price * acc.quantity, 0);
		return sum;
	};

	const checkout = () => {
		if (!user) {
			return toast.error('Please Login');
		} else {
			router.push('/checkout');
		}
	};
	return (
		<PagesLayout title="CART PAGE" description="The Cart Page">
			<div className="w-full h-full">
				<div>
					<h2>CART ITEMS</h2>
				</div>
				<div className="flex w-full flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-6 my-4 ">
					<div className="bg-gray-300 w-full lg:w-[75%] max-h-[70vh] overflow-y-scroll !scrollbar-thin !scrollbar-thumb-btn hover:scrollbar-thumb-btnHov">
						<table className="w-full ">
							<thead className="bg-cart">
								<tr className="">
									<th className="text-left p-2 text-xl text-white font-bold">
										Product
									</th>
									<th className="text-left p-2 text-xl text-white font-bold">
										Quantity
									</th>
									<th className="text-center p-2 text-xl text-white font-bold">
										Sum
									</th>
								</tr>
							</thead>

							{cart.map((product) => (
								<tbody
									key={product.id}
									className="mb-2 border-b-2 border-desc p-2 w-full h-full"
								>
									<tr>
										<td>
											<div className="flex items-center space-x-3">
												<div className="relative w-40 h-40 rounded-md">
													<Image
														src={urlFor(product.image).url()}
														alt="Product Image"
														objectFit="cover"
														layout="fill"
														className="rounded-md"
													/>
												</div>

												<div className="flex flex-col space-y-1 text-base text-gray-600">
													<span>Name: {product.name}</span>
													<span>Price: #{product.price}</span>
													<span>Size: {product.size}</span>
													<MdDeleteForever
														onClick={() => removeFromCart(product)}
														className="text-2xl font-bold text-red-500 hover:text-red-700"
													/>
												</div>
											</div>
										</td>

										<td className="self-center">
											<div className="flex items-center justify-center space-x-1 h-8 rounded-md border-2 border-gray-500 max-w-fit px-1">
												<div className="text-white font-bold cursor-pointer w-5 h-5 rounded-full bg-red-400 hover:bg-red-600 flex items-center justify-center">
													<GrFormSubtract className="text-white" />
												</div>
												<span className="text-gray-600">
													{product.quantity}
												</span>
												<div className="text-white font-bold cursor-pointer w-5 h-5 rounded-full bg-green-400 hover:bg-green-600 flex items-center justify-center">
													<GrFormAdd className="text-white" />
												</div>
											</div>
										</td>

										<td>
											<div className="items-center justify-center flex">
												<span className="text-gray-600">
													{product.price * product.quantity}
												</span>
											</div>
										</td>
									</tr>
								</tbody>
							))}
						</table>
					</div>
					<div className="bg-desc w-full lg:w-[25%] h-[10rem] rounded-md p-2 flex flex-col items-center justify-center">
						<h3>Total Cost: #{totalSum()}</h3>

						<div onClick={checkout} className="w-full">
							<button className="bg-btn hover:bg-btnHov text-white text-2xl font-bold w-full h-10 rounded-full">
								Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</PagesLayout>
	);
};

export default dynamic(() => Promise.resolve(CartPage), { ssr: false });
