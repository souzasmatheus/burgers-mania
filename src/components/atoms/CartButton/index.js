import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Fab from '@material-ui/core/Fab';

import { useStore } from '~/store/index';

import { StyledBadge } from './styled';

const CartButton = ({ handleCartButtonClick }) => {
  const cart = useStore((state) => state.cart);
  return (
    <StyledBadge
      color="secondary"
      badgeContent={cart.length}
      overlap="circle"
      onClick={handleCartButtonClick}
    >
      <Fab>
        <ShoppingCartIcon />
      </Fab>
    </StyledBadge>
  );
};

export default CartButton;
