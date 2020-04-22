import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';

// import App from './containers/App/App';

// import EnsureAuthenticatedUser from './containers/EnsureAuthenticatedUser/EnsureAuthenticatedUser';

import Home from './views/Home/Home';
import Page from './layouts/Page/Page';
import Person from './views/Person/Person';

//const env = process.env.NODE_ENV || 'development';

export default function App () {
  return (
    <Router history={history}>
      <Page>
        <Switch>
          <Route path="/" component={Home} exact/>
          {/* <EnsureAuthenticatedUser> */}
          <Switch>
            <Route path="/profile" component={Person} />
          </Switch>
          {/* </EnsureAuthenticatedUser> */}
        </Switch>
      </Page>
    </Router>
  )
}
