import React from 'react';

import { LinkIcon } from '~/components/atoms';

import { Container, LinksContainer, Title } from './styled';

import { useStore } from '~/store/index';

import FaceBookIcon from '~/assets/icons/facebook.png';
import InstagramIcon from '~/assets/icons/instagram.png';
import WhatsappIcon from '~/assets/icons/whatsapp.png';

const Footer = () => {
  const location = useStore((state) => state.location);
  const phoneNumber = location
    ? process.env[`REACT_APP_PHONE_${location}`]
    : undefined;
  return (
    <Container>
      <LinksContainer>
        <LinkIcon
          icon={FaceBookIcon}
          to="http://www.facebook.com/burgersmania2018"
        />
        <LinkIcon
          icon={InstagramIcon}
          to="http://www.instagram.com/burgersmania_/"
        />
        <LinkIcon icon={WhatsappIcon} to={`https://wa.me/${phoneNumber}`} />
      </LinksContainer>
      <Title>Burgers Mania</Title>
    </Container>
  );
};

export default Footer;
