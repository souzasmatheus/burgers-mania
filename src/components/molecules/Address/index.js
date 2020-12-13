import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import NextIcon from '@material-ui/icons/NavigateNext';

import { useStore } from '~/store/index';

import { StyledDialogContent, StyledTextField } from './styled';

const Address = ({ onNext }) => {
  const [address, setAddress] = useStore((state) => [
    state.address,
    state.setAddress,
  ]);

  const handleStreetChange = (e) => {
    setAddress([e.target.value, address[1]]);
  };

  const handleNumberChange = (e) => {
    setAddress([address[0], e.target.value]);
  };

  return (
    <>
      <StyledDialogContent>
        <StyledTextField
          onChange={handleStreetChange}
          value={address[0]}
          margin="dense"
          label="Rua"
          width="70%"
        />
        <StyledTextField
          onChange={handleNumberChange}
          value={address[1]}
          margin="dense"
          type="number"
          label="Número"
          width="25%"
        />
      </StyledDialogContent>
      <DialogActions>
        <Button
          endIcon={<NextIcon />}
          onClick={onNext}
          disabled={!address[0] || !address[1]}
        >
          Próximo
        </Button>
      </DialogActions>
    </>
  );
};

export default Address;
