export const getCategories = (products) => [
  ...new Set(products.map((product) => product.type)),
];

export const getSingleCategoryProducts = (products, category) =>
  products.filter((product) => product.type === category);

export const getProductString = (productOrder, products) => {
  const { amount, id } = productOrder;
  const { title } = products.find((product) => product.id === id);
  return `${amount} ${title}`;
};

export const getExtrasString = (extrasIds, extras) =>
  extrasIds
    .map((id) => extras.find((extra) => extra.id === id).title)
    .join(', ');
