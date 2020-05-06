import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import ErrorBoundary from '../../components/ErrorBoundary/index'
import AlertMessage from '../../components/AlertMessage/index';

export default function Page ( props ) {

  return (
    <React.Fragment>
      <Header />
      <AlertMessage />
      <ErrorBoundary>
        {props.children}
      </ErrorBoundary>
      <Footer />
    </React.Fragment>
  );
}

Page.propTypes = {
  children: PropTypes.element.isRequired
}

