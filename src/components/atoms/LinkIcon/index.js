import React from 'react';

import { Icon } from './styled';

const LinkIcon = ({ to, icon }) => (
  <a href={to} target="_blank">
    <Icon src={icon} />
  </a>
);

export default LinkIcon;
