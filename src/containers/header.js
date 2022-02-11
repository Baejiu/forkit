import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Container>
        <Header.Logo to={ROUTES.HOME} />
      </Header.Container>
      {children}
    </Header>
  );
};
