import React from 'react';
import { Background, Container, Logo } from './styles/header';
import { Link as ReachRouterLink } from 'react-router-dom';

export default function Header({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps}>LOGO</Logo>
    </ReachRouterLink>
  );
};
