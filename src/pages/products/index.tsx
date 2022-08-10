import React from 'react';
import PagesLayout from '../../components/layout/PagesLayout';

type ProductsProps = {};

const Products: React.FC<ProductsProps> = () => {
	return (
		<PagesLayout>
			<div></div>
		</PagesLayout>
	);
};
export default Products;

export const getServerSideprops = async () => {
	return {
		props: {},
	};
};
