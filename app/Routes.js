import React from 'react';
import { connect } from 'react-redux';
import { IndexRoute, Router, Route, Redirect } from 'react-router';

import ContainerPage from 'containers/pages/ContainerPage';
import HomePage from 'containers/pages/HomePage';
import PeoplePage from 'containers/pages/PeoplePage';

const Routes = ({ history }) => (
  <Router history={history} >
    <Route path=":lang" component={ContainerPage}>
      <IndexRoute component={HomePage} />
      <Route path="people" component={PeoplePage} />
    </Route>
    <Redirect from="*" to="en" />
  </Router>
);

Routes.propTypes = {
  history: React.PropTypes.object
};

export default connect()(Routes);
