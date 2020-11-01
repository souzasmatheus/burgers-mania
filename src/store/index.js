import create from 'zustand';

import menu from '~/assets/data/menu';

export const useStore = create((set) => ({
  products: menu,
  cart: [],
}));
