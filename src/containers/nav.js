import React from 'react';
import { Nav } from '../components';
import * as ROUTES from '../constants/routes';

export const NavContainer = ({ children }) => {
  return (
    <Nav>
      <Nav.Item to={ROUTES.HOME}>home</Nav.Item>
    </Nav>
  );
};
