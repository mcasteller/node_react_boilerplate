import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import Home from './views/Home/index';
import Page from './layouts/Page/index';
import Person from './views/Person/index';
import { AppProvider } from './context/AppProvider/store';
import AuthenticatedContent from './components/AuthenticatedContent/index.js';

//const env = process.env.NODE_ENV || 'development';

export default function App () {

  return (
    <Router history={history}>
      <AppProvider>
        <Page>
          <Switch>
            <Route path="/" component={Home} exact/>
            <AuthenticatedContent>
              <Switch>
                <Route path="/settings/account" component={Person} />
                <Route path="/dashboard" component={Person} />
              </Switch>
            </AuthenticatedContent>
          </Switch>
        </Page>
      </AppProvider>
    </Router>
  )
}
