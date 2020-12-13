import styled, { css } from 'styled-components';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';

export const StyledDialogContent = styled(DialogContent)`
  display: flex;
  justify-content: space-between;
`;

export const StyledTextField = styled(TextField)`
  &.MuiTextField-root {
    ${({ width }) =>
      css`
        width: ${width};
      `}
  }
`;
