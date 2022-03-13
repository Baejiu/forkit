import React from 'react';
import { Layout } from '../components';
import { useState } from 'react';

const SideBarContainer = () => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-280);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-280);
      setOpen(false);
    }
  };

  return (
    <Layout.Sidebar
      toggleMenu={toggleMenu}
      isOpen={isOpen}
      xPosition={xPosition}
    >
      sidebar menu
    </Layout.Sidebar>
  );
};

export default SideBarContainer;
