import React from 'react';
import LogoImg from '../../assets/img/logo.png';

import { Logo, Header } from './styles';
import Container from '../Container';
import MenuHeader from '../MenuHeader';
const routes = [
  {
    name: 'Home',
    path: '/home',
  },
  {
    name: 'Destination',
    path: '/destination',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Patner',
    path: '/patner',
  },
];
function index() {
  return (
    <Header>
      <Container>
        <a href="site">
          <Logo src={LogoImg} />
        </a>
        <MenuHeader routes={routes} />
      </Container>
    </Header>
  );
}

export default index;
