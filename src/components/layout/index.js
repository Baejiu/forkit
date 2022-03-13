import React from 'react';
import {
  Background,
  Container,
  Header,
  Sidebar,
  Contents,
} from './styles/layout';

export default function Layout({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Layout.Container = function LayoutContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Layout.Sidebar = function LayoutSidebar({
  children,
  toggleMenu,
  isOpen,
  ...restProps
}) {
  return (
    <Sidebar {...restProps}>
      <div>{children}</div>
      <button onClick={() => toggleMenu()}>{isOpen ? 'x' : '='}</button>
    </Sidebar>
  );
};

Layout.Header = function LayoutHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Layout.Contents = function LayoutContents({ children, ...restProps }) {
  return <Contents {...restProps}>{children}</Contents>;
};
