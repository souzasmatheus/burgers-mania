import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import { getFinalString } from '~/helpers/string';

import { useStore } from '~/store/index';

import { StyledButton, StyledWhatsapp } from './styled';

const CheckOut = () => {
  const [cart, products, extras, location, address] = useStore((state) => [
    state.cart,
    state.products,
    state.extras,
    state.location,
    state.address,
  ]);
  const string = getFinalString(cart, products, extras, address);

  const handleCheckoutClick = () => {
    window.open(
      `https://wa.me/${
        process.env[`REACT_APP_PHONE_${location}`]
      }?text=${encodeURI(string)}`
    );
  };

  return (
    <>
      <DialogContent style={{ whiteSpace: 'pre-line' }}>{string}</DialogContent>
      <DialogActions>
        <StyledButton
          variant="outlined"
          startIcon={<StyledWhatsapp />}
          onClick={handleCheckoutClick}
        >
          Enviar pedido
        </StyledButton>
      </DialogActions>
    </>
  );
};

export default CheckOut;
