import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export default styled(Button).attrs({
  disabled: true,
})`
  && {
    color: black;
  }
`;
