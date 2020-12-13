import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import DeleteIcon from '@material-ui/icons/Delete';
import NextIcon from '@material-ui/icons/NavigateNext';

import { useStore } from '~/store/index';

import { getProductString, getExtrasString } from '~/helpers/products';

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
      <DialogActions>
        <Button endIcon={<NextIcon />} onClick={onNext}>
          Próximo
        </Button>
      </DialogActions>
    </>
  );
};

export default Details;
