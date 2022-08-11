import { GetStaticProps } from 'next';
import Image from 'next/image';
import React, { useState } from 'react';
import { Productprop } from '../../../typings';
import PagesLayout from '../../components/layout/PagesLayout';
import client, { urlFor } from '../../utils/sanity';

type ProductDetailsProps = {
	product: Productprop;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
	return (
		<PagesLayout
			title="PRODUCT DETAILS PAGE"
			description="A Product Details Page"
		>
			<div className="w-full flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8">
				<div className="relative w-full md:w-[30rem] h-[33rem] rounded-md">
					<Image
						src={urlFor(product.image).url()}
						alt="Product Image"
						layout="fill"
						objectFit="cover"
						className="rounded-md"
					/>
				</div>

				<div className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0">
					<div className=" rounded-md p-2 flex flex-col space-y-2 bg-[#8D80AD] w-full md:w-[25rem] min-h-[20rem]">
						<div className="flex space-x-1 text-white">
							<h3 className="font-bold">Name:</h3>
							<span>{product.name}</span>
						</div>

						<div className="flex space-x-1 text-white">
							<h3 className="font-bold">Brand:</h3>
							<span className="capitalize">{product.brand}</span>
						</div>

						<div className="flex space-x-1 text-white">
							<h3 className="font-bold">Description:</h3>
							<span className="">{product.description}</span>
						</div>
					</div>

					<div className="w-full md:w-[25rem] rounded-md h-[12rem] p-2 bg-[#99B2DD] space-y-4 flex items-center flex-col justify-center">
						<div className="flex space-x-1 text-white">
							<h3 className="font-bold">Price:</h3>
							<span>#{product.price}</span>
						</div>
						<button className="bg-btn font-bold text-xl hover:bg-btnHov text-white w-full h-12 rounded-full">
							Add To Cart
						</button>
					</div>
				</div>
			</div>
		</PagesLayout>
	);
};
export default ProductDetails;

export const getStaticPaths = async () => {
	const products = await client.fetch(`*[_type == 'product']{
	_id,
	slug{
		current
	}
}`);
	const paths = products.map((product: Productprop) => ({
		params: {
			slug: product.slug.current,
		},
	}));

	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const product = await client.fetch(
		`*[_type == 'product' && slug.current == $slug][0]`,
		{ slug: params?.slug },
	);

	if (!product) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			product,
		},
		revalidate: 120,
	};
};
