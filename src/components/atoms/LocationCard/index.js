import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { useStore } from '~/store/index';

import { StyledDialogContent } from './styled';

const LocationCard = () => {
  const [setLocation, location] = useStore((state) => [
    state.setLocation,
    state.location,
  ]);

  return (
    <Dialog open={!location}>
      <DialogTitle>
        Por favor, selecione uma de nossas hamburguerias:
      </DialogTitle>
      <StyledDialogContent>
        <Button onClick={() => setLocation('spa')}>São Pedro d'Aldeia</Button>
        <Button onClick={() => setLocation('cf')}>Cabo Frio</Button>
      </StyledDialogContent>
    </Dialog>
  );
};

export default LocationCard;
