export interface Productprop {
	_id: string;
	name: string;
	image: {
		asset: { url: string };
	};
	brand: string;
	price: number;
	slug: {
		current: string;
	};
	category: string;
	description: string;
	numInStock: number;
	quantity: number;
}
