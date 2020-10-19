import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import RestaurantMenu from '@material-ui/icons/RestaurantMenu';
import Tune from '@material-ui/icons/Tune';

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const StyledMenuIcon = styled(RestaurantMenu)`
  margin-right: 10px;
`;

export const SettingsButton = styled(Button).attrs({
  children: <Tune />,
  size: 'small',
})`
  min-width: 30px;
  margin-left: 6px;
  padding-bottom: 0;
`;
