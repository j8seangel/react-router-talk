import dispatch from '../main';
import { updateMapParams } from 'actions/map';
import { updateTeamParams } from 'actions/team';
import { setLanguage } from 'redux-i18n';

function updateTeamPageParams(state) {
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

export function initTeamPage(actualState, replace, done) {
  updateTeamPageParams(actualState);
  done();
}

export function updateTeamPage(prevState, nextState, replace, done) {
  updateTeamPageParams(nextState);
  done();
}
