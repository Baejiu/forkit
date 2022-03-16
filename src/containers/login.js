import React from 'react';
import { Login } from '../components';

const LoginContainer = (props) => {
  return (
    <Login>
      <Login.Container>
        <Login.Logo />
        <Login.Header>Fork it에 오신 것을 환영합니다.</Login.Header>
      </Login.Container>
    </Login>
  );
};

export default LoginContainer;
