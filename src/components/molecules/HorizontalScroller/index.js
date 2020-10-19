import React from 'react';
import PropTypes from 'prop-types';

import { Container, ChildWrapper, Title } from './styled';

const HorizontalScroller = ({
  style,
  renderItem,
  data,
  keyExtractor,
  title,
}) => {
  const renderItems = data.map((item, index) => {
    const RenderedComponent = renderItem(item, index);

    return (
      <ChildWrapper key={keyExtractor(item, index)}>
        {RenderedComponent}
      </ChildWrapper>
    );
  });

  return (
    <>
      {title && <Title>{title}</Title>}
      <Container {...{ style }}>{renderItems}</Container>
    </>
  );
};

HorizontalScroller.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
  keyExtractor: PropTypes.func.isRequired,
};

HorizontalScroller.defaultProps = {
  style: {},
  title: null,
};

export default HorizontalScroller;
