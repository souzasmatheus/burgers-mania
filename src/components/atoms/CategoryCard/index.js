import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Container, LabelContainer, Label } from './styled';

const CategoryCard = forwardRef(({ name, backgroundSource, style }, ref) => (
  <Container source={backgroundSource} {...{ style, ref }}>
    <LabelContainer>
      <Label>{name}</Label>
    </LabelContainer>
  </Container>
));

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  backgroundSource: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

CategoryCard.defaultProps = {
  style: {},
};

export default CategoryCard;
