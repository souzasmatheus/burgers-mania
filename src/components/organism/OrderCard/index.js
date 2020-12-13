import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import { useStore } from '~/store/index';

import { CloseButton } from '~/components/atoms';
import { Details, Address, CheckOut } from '~/components/molecules';

import { BreadCrumbItem } from './styled';

const OrderCard = ({ visible, handleClose }) => {
  const [selected, setSelected] = useState(0);
  const [cart, setAddress] = useStore((state) => [
    state.cart,
    state.setAddress,
  ]);

  useEffect(() => {
    const getUrl = (lat, lon) =>
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

    const success = (position) => {
      const {
        coords: { latitude, longitude },
      } = position;

      fetch(getUrl(latitude, longitude))
        .then((response) => response.json())
        .then((data) => {
          const { road, house_number } = data.address;
          setAddress([road, house_number]);
        });
    };

    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const handleCloseAndReset = () => {
    handleClose();
    setSelected(0);
  };

  const content =
    selected === 0 ? (
      <Details onNext={() => setSelected(1)} />
    ) : selected === 1 ? (
      <Address onNext={() => setSelected(2)} />
    ) : (
      <CheckOut />
    );

  return (
    <Dialog
      fullWidth
      onClose={handleCloseAndReset}
      open={visible}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>
        <Breadcrumbs
          style={{
            margin: '0 auto',
          }}
          separator=">"
        >
          <BreadCrumbItem isSelected={selected === 0}>Detalhes</BreadCrumbItem>
          <BreadCrumbItem isSelected={selected === 1}>Endereço</BreadCrumbItem>
          <BreadCrumbItem isSelected={selected === 2}>
            Finalização
          </BreadCrumbItem>
        </Breadcrumbs>
      </DialogTitle>

      <CloseButton onClick={handleCloseAndReset} />
      {cart.length > 0 ? (
        content
      ) : (
        <DialogContent>
          <p>Adicione lanches ao seu pedido :)</p>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default OrderCard;
