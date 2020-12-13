import { getProductString, getExtrasString } from '~/helpers/products';

export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const getAddressString = (address) => {
  const [street, number] = address;

  return `Endereço:\n🛵 - ${street}, ${number}`;
};

export const getFinalString = (cart, products, extras, address) => {
  const emojis = {
    burgers: '🍔',
    batatas: '🍟',
    baurus: '🥙',
    combo: '🥡',
  };

  const productsString = cart
    .map((product) => {
      const { type } = products.find((item) => item.id === product.id);
      const { isCombo } = product;
      const extrasString = getExtrasString(product.extras, extras);
      return `${emojis[isCombo ? 'combo' : type]} - ${getProductString(
        product,
        products,
        isCombo
      )}${extrasString && `\n        Adicionais: ${extrasString}`}`;
    })
    .join('\n');

  return `${productsString}\n\n${getAddressString(address)}`;
};
