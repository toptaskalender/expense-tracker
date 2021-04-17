import React from 'react';

import Header from '../../components/UI/Header/Header';
import './Layout.css';

function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <main>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
