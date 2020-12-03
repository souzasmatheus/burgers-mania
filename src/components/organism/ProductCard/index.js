import React, { useEffect, useState } from 'react';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Switch from '@material-ui/core/Switch';

import FastfoodIcon from '@material-ui/icons/Fastfood';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

import { useStore } from '~/store';

import { DisabledButton, CloseButton } from '~/components/atoms';

import {
  Container,
  Content,
  StyledImage,
  Title,
  Price,
  Bottom,
  ActionArea,
  StyledAvatar,
  ModalTitle,
  Description,
  StyledDialogContent,
  StyledDialogActions,
  SwitchContainer,
} from './styled';

const ProductCard = ({
  style,
  source,
  price,
  name,
  description,
  id,
  specialCondition,
  specialConditionPrice,
}) => {
  const [extras, addToCart] = useStore((state) => [
    state.extras,
    state.addToCart,
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [additionalsVisible, setAdditionalsVisible] = useState(false);
  const [product, setProduct] = useState({
    amount: 1,
    extras: [],
  });
  const [total, setTotal] = useState(price);
  const [isCombo, setCombo] = useState(false);

  useEffect(() => {
    const extrasTotal = product.extras.reduce((accumulator, currentValue) => {
      const { price } = extras.find((extra) => extra.id === currentValue);
      return accumulator + parseFloat(price);
    }, 0);
    const sum =
      (extrasTotal + parseFloat(isCombo ? specialConditionPrice : price)) *
      product.amount;
    setTotal(sum.toFixed(2));
  }, [product, extras, price, isCombo]);

  const handleExtraClick = (extraId) => {
    const extraAlreadySelected = product.extras.includes(extraId);

    if (extraAlreadySelected) {
      setProduct((prevState) => ({
        ...prevState,
        extras: prevState.extras.filter((extra) => extra !== extraId),
      }));
    } else {
      setProduct((prevState) => ({
        ...prevState,
        extras: [...prevState.extras, extraId],
      }));
    }
  };

  const handleAmountChange = (value) => {
    const newValue = product.amount + value > 1 ? product.amount + value : 1;
    setProduct((prevState) => ({
      ...prevState,
      amount: newValue,
    }));
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      id,
      total,
      isCombo,
    });
    resetState();
    setSnackbarVisible(true);
  };

  const resetState = () => {
    setProduct({
      amount: 1,
      extras: [],
    });
    setTotal(price);
    setCombo(false);
  };

  return (
    <>
      <Container {...{ style }}>
        <ActionArea onClick={() => setModalVisible(true)}>
          <StyledImage image={source} />
          <Content>
            <Title>{name}</Title>
          </Content>
          <Bottom>
            <Price>R${price}</Price>
            <MoreHoriz />
          </Bottom>
        </ActionArea>
      </Container>
      <Dialog
        fullWidth
        onClose={() => setModalVisible(false)}
        open={modalVisible}
      >
        <CloseButton onClick={() => setModalVisible(false)} />
        <StyledAvatar alt="product" src={source} />
        <DialogTitle>
          <ModalTitle>{name}</ModalTitle>
          <Description>{description}</Description>
          {specialCondition && (
            <SwitchContainer>
              <Switch
                checked={isCombo}
                onChange={() => setCombo((prevState) => !prevState)}
              />
              <Description>{specialCondition}</Description>
            </SwitchContainer>
          )}
        </DialogTitle>
        <DialogContent dividers>
          <List
            component="div"
            aria-labelledby="nested-list-subheader"
            style={{ padding: 0 }}
          >
            <ListItem
              button
              disableGutters
              onClick={() => setAdditionalsVisible((prevState) => !prevState)}
            >
              <ListItemIcon>
                <FastfoodIcon />
              </ListItemIcon>
              <ListItemText primary="Adicionais" />
              {additionalsVisible ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={additionalsVisible} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {extras.map((extra, index) => (
                  <ListItem key={`extra-${index}`}>
                    <ListItemText
                      primary={extra.title}
                      secondary={extra.price}
                    />
                    <ListItemSecondaryAction>
                      <Checkbox
                        edge="end"
                        checked={product.extras.includes(extra.id)}
                        onClick={() => handleExtraClick(extra.id)}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        </DialogContent>
        <StyledDialogContent dividers>
          <ButtonGroup aria-label="small contained button group">
            <Button onClick={() => handleAmountChange(-1)}>
              <Remove />
            </Button>
            <DisabledButton disabled>{product.amount}</DisabledButton>
            <Button>
              <Add onClick={() => handleAmountChange(1)} />
            </Button>
          </ButtonGroup>
        </StyledDialogContent>
        <StyledDialogActions>
          <DisabledButton disabled>Total: R${total}</DisabledButton>
          <Button color="primary" onClick={handleAddToCart}>
            Adicionar
          </Button>
        </StyledDialogActions>
      </Dialog>
      <Snackbar
        open={snackbarVisible}
        autoHideDuration={2500}
        onClose={() => setSnackbarVisible(false)}
      >
        <Alert severity="success" elevation={6} variant="filled">
          Adicionado com sucesso ao seu carrinho!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductCard;
