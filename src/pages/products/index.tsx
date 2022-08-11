import axios from 'axios';
import React from 'react';
import { Productprop } from '../../../typings';
import PagesLayout from '../../components/layout/PagesLayout';
import Product from '../../components/product/Product';
import { BASE_URL } from '../../utils/baseUrl';

type ProductsProps = {
	products: Array<Productprop>;
};

const Products: React.FC<ProductsProps> = ({ products }) => {
	return (
		<PagesLayout title="PRODUCTS PAGE" description="The Products Page">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{products?.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>
		</PagesLayout>
	);
};
export default Products;

export const getServerSideProps = async () => {
	const { data } = await axios.get(`${BASE_URL}/api/products`);
	return {
		props: {
			products: data,
		},
	};
};
