import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';

import { InputContainer, StyledMenuIcon, SettingsButton } from './styled';

const SearchBar = ({ placeholder, onTextChange, onSettingsClick }) => (
  <InputContainer>
    <StyledMenuIcon />
    <TextField
      onChange={(e) => onTextChange(e.target.value)}
      label={null}
      fullWidth
      {...{ placeholder }}
    />
    <SettingsButton onClick={onSettingsClick} />
  </InputContainer>
);

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onTextChange: PropTypes.func,
  onSettingsClick: PropTypes.func,
};

SearchBar.defaultProps = {
  placeholder: 'Pesquisar',
  onTextChange: () => null,
  onSettingsClick: () => null,
};

export default SearchBar;
