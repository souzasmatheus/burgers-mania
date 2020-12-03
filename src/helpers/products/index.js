export const getCategories = (products) => [
  ...new Set(products.map((product) => product.type)),
];

export const getSingleCategoryProducts = (products, category) =>
  products.filter((product) => product.type === category);

export const getProductString = (productOrder, products) => {
  const { amount, id, isCombo } = productOrder;
  const { title } = products.find((product) => product.id === id);
  return isCombo
    ? `${amount} trio${amount > 1 ? 's' : ''} de ${title}`
    : `${amount} ${title}`;
};

export const getExtrasString = (extrasIds, extras) =>
  extrasIds
    .map((id) => extras.find((extra) => extra.id === id).title)
    .join(', ');

export const getTotalPrice = (cart) => {
  const sum = cart.reduce(
    (accumulator, product) => parseFloat(product.total) + accumulator,
    0
  );

  return sum.toFixed(2);
};
