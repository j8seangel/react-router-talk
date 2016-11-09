import React from 'react';
import { connect } from 'react-redux';
import { IndexRoute, Router, Route, Redirect } from 'react-router';

import { updateLanguage, initTeamPage, updateTeamPage } from './routesActions';

import ContainerPage from 'containers/pages/ContainerPage';
import HomePage from 'containers/pages/HomePage';
import TeamPage from 'containers/pages/TeamPage';

const Routes = ({ history }) => (
  <Router history={history} >
    <Route path=":lang" onEnter={updateLanguage} component={ContainerPage}>
      <IndexRoute component={HomePage} />
      <Route path="team" onEnter={initTeamPage} onChange={updateTeamPage} >
        <IndexRoute component={TeamPage} />
        <Route path=":lat/:lng/:zoom" component={TeamPage} />
        <Redirect from="*" to="/en/map" />
      </Route>
    </Route>
    <Redirect from="*" to="en" />
  </Router>
);

Routes.propTypes = {
  history: React.PropTypes.object
};

export default connect()(Routes);
