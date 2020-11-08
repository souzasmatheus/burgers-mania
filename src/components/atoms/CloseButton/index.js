import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';

export default styled(IconButton).attrs({
  children: <CloseIcon />,
})`
  position: absolute;
  right: 0;
  top: 0;
`;
