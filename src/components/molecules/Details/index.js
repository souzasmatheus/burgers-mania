import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import DeleteIcon from '@material-ui/icons/Delete';
import NextIcon from '@material-ui/icons/NavigateNext';

import { DisabledButton } from '~/components/atoms';

import { useStore } from '~/store/index';

import {
  getProductString,
  getExtrasString,
  getTotalPrice,
} from '~/helpers/products';

import { StyledDialogActions } from './styled';

const Details = ({ onNext }) => {
  const [cart, products, extras, removeFromCart] = useStore((state) => [
    state.cart,
    state.products,
    state.extras,
    state.removeFromCart,
  ]);

  return (
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
                <IconButton edge="end" onClick={() => removeFromCart(index)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <StyledDialogActions>
        <DisabledButton>Total: R${getTotalPrice(cart)}</DisabledButton>
        <Button endIcon={<NextIcon />} onClick={onNext}>
          Próximo
        </Button>
      </StyledDialogActions>
    </>
  );
};

export default Details;
