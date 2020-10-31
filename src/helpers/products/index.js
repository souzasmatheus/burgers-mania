export const getCategories = (products) => [
  ...new Set(products.map((product) => product.type)),
];

export const getSingleCategoryProducts = (products, category) =>
  products.filter((product) => product.type === category);
