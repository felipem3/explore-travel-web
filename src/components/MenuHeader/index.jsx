import React from 'react';

import { Container, Menu, MenuContainer, Link } from './styles';
import Button from '../Button';

function index({ routes }) {
  return (
    <Container>
      <MenuContainer>
        {routes.map((route, index) => (
          <Menu key={index}>
            <Link
              selected={window.location.pathname === route.path}
              href={route.path}
            >
              {route.name}
            </Link>
          </Menu>
        ))}
      </MenuContainer>
      <Button href="#login" outline={true}>
        Login
      </Button>
      <Button style={{ marginLeft: 18 }} href="#register">
        Register
      </Button>
    </Container>
  );
}

export default index;
