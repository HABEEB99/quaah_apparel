import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	apiVersion: '2022-06-27',
	useCdn: process.env.NODE_ENV === 'production',
	token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
};

const client = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(client).image(source);
// export const imageBuilder = (source) =>
// 	createImageUrlBuilder(config).image(source);
// export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export default client;
