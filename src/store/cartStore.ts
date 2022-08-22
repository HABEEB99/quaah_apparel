import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export interface Product {
	id: string;
	name: string;
	description: string;
	image: string;
	price: number;
	quantity: number;
	size: string;
}

interface CartStore {
	cart: Array<Product>;
	addToCart: (product: Product) => void;
	removeFromCart: (product: Product) => void;
	emptyCart: () => void;
	increaseProductQuantity: (product: Product) => void;
	decreaseProductQuantity: (product: Product) => void;
}

export const useCartStore = create<CartStore>()(
	devtools(
		persist((set) => ({
			cart: [],
			addToCart: (product) => {
				set((state) => ({ cart: [...state.cart, product] }));
			},
			removeFromCart: (product) => {
				set((state) => ({
					cart: state.cart.filter((p) => p.id !== product.id),
				}));
			},
			emptyCart: () => {
				set((state) => ({ cart: [] }));
			},
			increaseProductQuantity: (product) => {
				set((state) => ({}));
			},
			decreaseProductQuantity: () => {},
		})),
	),
);
