import React from 'react';

import { LinkIcon } from '~/components/atoms';

import { Container, LinksContainer, Title } from './styled';

import FaceBookIcon from '~/assets/icons/facebook.png';
import InstagramIcon from '~/assets/icons/instagram.png';
import WhatsappIcon from '~/assets/icons/whatsapp.png';

const Footer = () => (
  <Container>
    <LinksContainer>
      <LinkIcon icon={FaceBookIcon} to="http://www.facebook.com" />
      <LinkIcon icon={InstagramIcon} to="http://www.instagram.com" />
      <LinkIcon icon={WhatsappIcon} to="http://www.whatsapp.com" />
    </LinksContainer>
    <Title>Burgers Mania</Title>
  </Container>
);

export default Footer;
