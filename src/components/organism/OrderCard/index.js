import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

import { useStore } from '~/store/index';

import { DisabledButton } from '~/components/atoms';

import {
  getProductString,
  getExtrasString,
  getTotalPrice,
} from '~/helpers/products';
import { getFinalString } from '~/helpers/string';

import { StyledButton, StyledWhatsapp, StyledDialogActions } from './styled';

const OrderCard = ({ visible, handleClose }) => {
  const [cart, products, extras, removeFromCart] = useStore((state) => [
    state.cart,
    state.products,
    state.extras,
    state.removeFromCart,
  ]);

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  const handleCheckoutClick = () => {
    const string = getFinalString(cart, products, extras);
    window.open(`https://wa.me/${process.env.REACT_APP_PHONE}?text=${string}`);
  };

  return (
    <Dialog
      fullWidth
      onClose={handleClose}
      open={visible}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>Confirmação do pedido</DialogTitle>
      {cart.length > 0 ? (
        <>
          <DialogContent>
            <List component="div" aria-labelledby="nested-list-subheader">
              {cart.map((product, index) => (
                <ListItem>
                  <ListItemText
                    primary={getProductString(product, products)}
                    secondary={
                      product.extras.length > 0 &&
                      `Adicionais: ${getExtrasString(product.extras, extras)}`
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      onClick={() => handleRemoveFromCart(index)}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </DialogContent>
          <StyledDialogActions>
            <DisabledButton>Total: R${getTotalPrice(cart)}</DisabledButton>
            <StyledButton
              variant="outlined"
              startIcon={<StyledWhatsapp />}
              onClick={handleCheckoutClick}
            >
              Enviar pedido
            </StyledButton>
          </StyledDialogActions>
        </>
      ) : (
        <DialogContent>
          <p>Adicione lanches ao seu pedido :)</p>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default OrderCard;
