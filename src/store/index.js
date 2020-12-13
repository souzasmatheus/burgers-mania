import create from 'zustand';

import products from '~/assets/data/products';
import extras from '~/assets/data/extras';

export const useStore = create((set) => ({
  products,
  extras,
  cart: [],
  location: null,
  address: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (indexToRemove) =>
    set((state) => ({
      cart: [...state.cart.filter((product, index) => index !== indexToRemove)],
    })),
  setLocation: (location) => set(() => ({ location })),
  setAddress: (address) =>
    set((state) => ({
      address,
    })),
}));
