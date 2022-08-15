import create from 'zustand';
import { persist } from 'zustand/middleware';
import { userProp } from '../../typings';

const authStore = (set: any) => ({
	user: null,
	addUser: (userDetails: userProp) => set({ user: userDetails }),
	removeUser: () => set({ user: null }),
});

export const useAuthStore = create(persist(authStore, { name: 'auth' }));
