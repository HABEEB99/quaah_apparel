import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export interface UserOrderDetailsProp {
	fullName: string;
	address: string;
	country: string;
	city: string;
	postalCode: string;
}

const OrderDetails = (set: any) => ({
	userOrderDetails: null,
	addUserOrderDetails: (data: UserOrderDetailsProp) =>
		set({ userOrderDetails: data }),
	removeUserOrderDetails: () => set({ userOrderDetails: null }),

	methodOfPayment: '',
	addMethodOfPayment: (method: string) => set({ methodOfPayment: method }),
	removeMethodOfPaymnet: () => set({ methodOfPayment: '' }),
});

export const useOrderDetails = create(
	devtools(persist(OrderDetails, { name: 'orderDetails' })),
);

// interface OrderDetails {
// 	userDetails: {};
// 	addUserDetails: (data: UserDetailsProp) => void;
// 	removeUserDetails: () => void;

// 	methodOfPayment: string;
// 	addMethodOfPayment: (method: string) => void;
// 	removeMethodOfPaymnet: () => void;
// }

// export const useOrderDetails = create<OrderDetails>()(
// 	devtools(
// 		persist((set) => ({
// 			userDetails: {},
// 			addUserDetails: (data) => set({ userDetails: data }),
// 			removeUserDetails: () => set({ userDetails: {} }),
// 			methodOfPayment: '',
// 			addMethodOfPayment: (method) => set({ methodOfPayment: method }),
// 			removeMethodOfPaymnet: () => set({ methodOfPayment: '' }),
// 		})),
// 	),
// );
