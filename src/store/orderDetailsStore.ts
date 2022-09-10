import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export interface UserOrderDetailsProp {
  fullName: string;
  address: string;
  country: string;
  city: string;
  postalCode: string;
}

interface OrderDetails {
  userOrderDetails: any;
  addUserOrderDetails: (data: UserOrderDetailsProp) => void;
  removeUserDetails: () => void;

  methodOfPayment: string;
  addMethodOfPayment: (method: string) => void;
  removeMethodOfPaymnet: () => void;
}

export const useOrderDetails = create<OrderDetails>()(
  devtools(
    persist((set) => ({
      userOrderDetails: null,
      addUserOrderDetails: (data) => set({ userOrderDetails: data }),
      removeUserDetails: () => set({ userOrderDetails: null }),
      methodOfPayment: "",
      addMethodOfPayment: (method) => set({ methodOfPayment: method }),
      removeMethodOfPaymnet: () => set({ methodOfPayment: "" }),
    }))
  )
);
