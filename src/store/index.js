import create from 'zustand';

import products from '~/assets/data/products';
import extras from '~/assets/data/extras';

export const useStore = create((set) => ({
  products,
  extras,
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (indexToRemove) =>
    set((state) => ({
      cart: [...state.cart.filter((product, index) => index !== indexToRemove)],
    })),
}));
