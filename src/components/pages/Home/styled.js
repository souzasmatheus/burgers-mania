import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';

export const styles = {
  horizontalScroller: {
    paddingBottom: 5,
  },
  productCard: {
    marginRight: 10,
  },
  lastProduct: {
    marginRight: 20,
  },
};

export const StyledFAB = styled(Fab)`
  position: fixed;
  bottom: 40px;
  right: 30px;
`;
