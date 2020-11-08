import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import WhatsappIcon from '@material-ui/icons/WhatsApp';
import DialogActions from '@material-ui/core/DialogActions';

export const StyledButton = styled(Button)`
  &.MuiButton-root {
    border: 1px solid rgba(37, 211, 102, 0.23);
    color: rgb(37, 211, 102);
  }
`;

export const StyledWhatsapp = styled(WhatsappIcon)`
  fill: rgb(37, 211, 102);
`;

export const StyledDialogActions = styled(DialogActions)`
  justify-content: space-around;
`;
