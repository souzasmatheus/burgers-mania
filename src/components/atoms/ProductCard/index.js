import React, { useState } from 'react';
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

import FastfoodIcon from '@material-ui/icons/Fastfood';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

import { useStore } from '~/store/index';

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
  ModalPrice,
  Description,
  StyledDialogContent,
} from './styled';

const ProductCard = ({ style, source, price, name, description, id }) => {
  const extras = useStore((state) => state.extras);
  const addToCart = useStore((state) => state.addToCart);
  const [modalVisible, setModalVisible] = useState(false);
  const [additionalsVisible, setAdditionalsVisible] = useState(false);
  const [product, setProduct] = useState({
    id: null,
    amount: 0,
    extras: [],
  });
  const totalPrice = '22,50';

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

  return (
    <>
      <Container {...{ style }}>
        <ActionArea onClick={() => setModalVisible(true)}>
          <StyledImage image={source} />
          <Content>
            <Title>{name}</Title>
          </Content>
          <Bottom>
            <Price>{price}</Price>
            <MoreHoriz />
          </Bottom>
        </ActionArea>
      </Container>
      <Dialog
        onClose={() => setModalVisible(false)}
        open={modalVisible}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <StyledAvatar alt="product" src={source} />
        <DialogTitle id="alert-dialog-title">
          <ModalTitle>{name}</ModalTitle>
          <Description>{description}</Description>
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
                  <ListItem button key={`extra-${index}`}>
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
        <StyledDialogContent>
          <ButtonGroup aria-label="small contained button group">
            <Button>
              <Remove />
            </Button>
            <ModalPrice disabled>Total: R${totalPrice}</ModalPrice>
            <Button>
              <Add />
            </Button>
          </ButtonGroup>
        </StyledDialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
