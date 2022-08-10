import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Productprop } from '../../../typings';
import { urlFor } from '../../utils/sanity';

type LatestProductsProps = {
	products: Array<Productprop>;
};

const LatestProducts: React.FC<LatestProductsProps> = ({ products }) => {
	return (
		<div className="my-4">
			<h2 className="text-2xl md:text-4xl mb-2 font-bold">Latest Products</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{products.slice(0, 4).map((product) => (
					<div
						key={product._id}
						className="w-full md:w-[22rem] lg:w-[20rem] h-[20rem] relative rounded-md bg-stone-300 dark:bg-stone-500 group"
					>
						<span className="z-[5] absolute top-0 left-0 font-bold text-white">
							{product.name}
						</span>
						<Image
							src={urlFor(product.image).url()}
							layout="fill"
							objectFit="cover"
							className="overflow-hidden rounded-md"
						/>
						<Link href="/products" passHref>
							<div className="w-full absolute bottom-32 left-0 px-8 h-10 hidden group-hover:block">
								<button className="bg-btn hover:bg-btnHov w-full h-full rounded-full text-white font-bold">
									SHOP NOW
								</button>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
export default LatestProducts;
