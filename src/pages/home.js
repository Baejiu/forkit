import React from 'react';
import SideBarContainer from '../containers/sidebar';
import { Layout } from '../components';

const Home = (props) => {
  return (
    <Layout>
      <Layout.Container>
        <SideBarContainer />
        <Layout.Contents>home</Layout.Contents>
      </Layout.Container>
    </Layout>
  );
};

export default Home;
