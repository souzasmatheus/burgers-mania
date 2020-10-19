import React from 'react';

import { Footer } from '~/components/organism';

import { Wrapper, StyledImage } from './styled';

import Logo from '~/assets/images/logo.png';

const Container = ({ children }) => (
  <>
    <Wrapper>
      <StyledImage src={Logo} />
      {children}
    </Wrapper>
    <Footer />
  </>
);

export default Container;
