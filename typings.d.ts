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

export interface userProp {
	given_name: string;
	name: string;
	email: string;
	picture: string;
	sub: string;
}
