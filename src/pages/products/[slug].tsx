import { GetStaticProps } from 'next';
import Image from 'next/image';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Productprop } from '../../../typings';
import PagesLayout from '../../components/layout/PagesLayout';
import { useCartStore } from '../../store/cartStore';
import client, { urlFor } from '../../utils/sanity';

type ProductDetailsProps = {
	product: Productprop;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
	const [size, setSize] = useState<string>('');

	const { cart, addToCart } = useCartStore();

	const item = {
		id: product._id,
		name: product.name,
		description: product.description,
		image: urlFor(product.image).url(),
		price: product.price,
		quantity: 1,
		size: size,
	};

	const handleAddToCart = () => {
		const existingItem = cart.find((product) => product.id === item.id);
		if (existingItem) {
			return toast.error(`${item.name} is already in the cart`);
		} else {
			addToCart(item);
			toast.success(`${item.name} added to cart`);
		}
	};

	console.log(cart);

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
					<div className=" rounded-md p-2 flex flex-col space-y-2 bg-cart w-full md:w-[25rem] min-h-[20rem]">
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

					<div className="w-full md:w-[25rem] rounded-md h-[12rem] p-2 bg-desc space-y-4 flex items-center flex-col justify-center">
						<div className="flex space-x-1 text-white">
							<h3 className="font-bold">Price:</h3>
							<span>#{product.price}</span>
						</div>
						<div>
							<select
								name="Sizes"
								id="sizes"
								className="bg-white text-gray-500 w-40 h-8 outline-none rounded-md"
								onChange={(e) => setSize(e.target.value)}
							>
								<option value="">Select Size</option>
								<option value="XS">XS</option>
								<option value="S">S</option>
								<option value="M">M</option>
								<option value="L">L</option>
								<option value="XL">XL</option>
								<option value="2XL">2XL</option>
							</select>
						</div>
						<button
							onClick={handleAddToCart}
							className="bg-btn font-bold text-xl hover:bg-btnHov text-white w-full h-12 rounded-full"
						>
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
