import React from 'react';
import PagesLayout from '../components/layout/PagesLayout';
import Banner from '../components/banner/Banner';
import { BASE_URL } from '../utils/baseUrl';
import LatestProducts from '../components/latest-products/LatestProducts';
import axios from 'axios';
import { Productprop } from '../../typings';
import Newsletter from '../components/newsletter/Newsletter';

type HomeProps = {
	products: Array<Productprop>;
};

const Home: React.FC<HomeProps> = ({ products }) => {
	return (
		<PagesLayout title="HOME PAGE" description="Quaah apparel home page">
			<Banner />
			<LatestProducts products={products} />
			<Newsletter />
		</PagesLayout>
	);
};
export default Home;

export const getServerSideProps = async () => {
	const { data } = await axios.get(`${BASE_URL}/api/products`);
	return {
		props: {
			products: data,
		},
	};
};
