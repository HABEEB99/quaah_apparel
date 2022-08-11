import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Productprop } from '../../../typings';
import { urlFor } from '../../utils/sanity';

type ProductProps = {
	product: Productprop;
};

const Product: React.FC<ProductProps> = ({ product }) => {
	return (
		<div className="w-full md:w-[24rem] lg:w-[20rem] h-[24rem] group relative rounded-md bg-stone-300 dark:bg-stone-500 group">
			<span className="z-[5] absolute top-0 left-0 font-bold text-white">
				{product.name}
			</span>
			<div className="w-full h-[85%] relative">
				<Image
					src={urlFor(product.image).url()}
					layout="fill"
					objectFit="cover"
					className="overflow-hidden rounded-t-md group-hover:scale-110 ease-in-out"
				/>
			</div>

			<div className="flex items-center justify-between px-1 h-8 mt-3">
				<div className="flex items-center space-x-2">
					<span className="font-bold">#{product.price}</span>
					<FaCartPlus className="text-btn hover:text-btnHov font-bold" />
				</div>

				<Link href={`/products/${product.slug.current}`}>
					<button className="text-sm hover:bg-btn w-24 font-bold h-8 rounded-full hover:text-white">
						View Details
					</button>
				</Link>
			</div>
		</div>
	);
};
export default Product;
