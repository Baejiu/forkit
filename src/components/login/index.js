import React from 'react';
import { Background, Container, Logo, Header } from './styles/login';

export default function Login({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Login.Container = function LoginContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Login.Logo = function LoginLogo() {
  return <Logo>FORK IT LOGO</Logo>;
};

Login.Header = function LoginHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};
