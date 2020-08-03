import React from 'react';

import { Container } from './styles';

function index({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

export default index;
