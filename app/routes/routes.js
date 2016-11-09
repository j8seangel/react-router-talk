import React from 'react';
import { connect } from 'react-redux';
import { IndexRoute, Router, Route, Redirect } from 'react-router';

import { updateLanguage, initMapPage, updateMapPage } from './routesActions';

import ContainerPage from 'containers/pages/ContainerPage';
import HomePage from 'containers/pages/HomePage';
import TeamPage from 'containers/pages/TeamPage';
import MapPage from 'containers/pages/MapPage';

const Routes = ({ history }) => (
  <Router history={history} >
    <Route path=":lang" onEnter={updateLanguage} component={ContainerPage}>
      <IndexRoute component={HomePage} />
      <Route path="map" onEnter={initMapPage} onChange={updateMapPage} >
        <IndexRoute component={MapPage} />
        <Route path=":lat/:lng/:zoom" component={MapPage} />
        <Redirect from="*" to="/en/map" />
      </Route>
      <Route path="team" component={TeamPage} />
    </Route>
    <Redirect from="*" to="en" />
  </Router>
);

Routes.propTypes = {
  history: React.PropTypes.object
};

export default connect()(Routes);
