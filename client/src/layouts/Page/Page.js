import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Page ( props ) {

  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

Page.propTypes = {
  children: PropTypes.element.isRequired
}

