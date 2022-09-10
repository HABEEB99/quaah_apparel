import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import { userProp } from "../../typings";

interface AuthStore {
  user: any;
  addUser: (newUser: userProp) => void;
  removeUser: () => void;
}

// const authStore = (set: any) => ({
//   user: null,
//   addUser: (userDetails: userProp) => set({ user: userDetails }),
//   removeUser: () => set({ user: null }),
// });

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist((set) => ({
      user: null,
      addUser: (newUser) => set({ user: newUser }),
      removeUser: () => set({ user: null }),
    }))
  )
);
// export const useAuthStore = create(persist(authStore, { name: "auth" }));
