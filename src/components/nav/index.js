import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { List, Item } from './styles/nav';

export default function Nav({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
}

Nav.Item = function NavItem({ to, children, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Item {...restProps}>{children}</Item>
    </ReachRouterLink>
  );
};
