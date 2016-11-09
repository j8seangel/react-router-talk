import dispatch from '../main';
import { updateMapParams } from 'actions/map';
import { updateTeamParams } from 'actions/team';
import { setLanguage } from 'redux-i18n';

function updateMapPageParams(state) {
  if (state.params.lat && state.params.lng && state.params.zoom) {
    dispatch(updateMapParams(state.params));
  }
  const team = state.location.query.team;
  if (team) {
    dispatch(updateTeamParams(team.split(',')));
  } else {
    dispatch(updateTeamParams([]));
  }
}

export function updateLanguage(actualState, replace, done) {
  dispatch(setLanguage(actualState.params.lang));
  done();
}

export function initMapPage(actualState, replace, done) {
  updateMapPageParams(actualState);
  done();
}

export function updateMapPage(prevState, nextState, replace, done) {
  updateMapPageParams(nextState);
  done();
}
