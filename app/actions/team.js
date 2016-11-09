import { push } from 'react-router-redux';
import { TEAM_GET_LIST, TEAM_UPDATE_ACTIVE } from 'constants';

export function updateTeamURL(params) {
  return (dispatch, state) => {
    const map = state().map;
    const mapParams = `${map.lat}/${map.lng}/${map.zoom}`;

    const query = params.length ? `?team=${params.join(',')}` : '';

    const lang = state().i18nState.lang;
    dispatch(push(`/${lang}/team/${mapParams}${query}`));
  };
}

export function updateTeamParams(data) {
  return dispatch => {
    dispatch({
      type: TEAM_UPDATE_ACTIVE,
      payload: data
    });
  };
}

export function getTeamList() {
  const url = 'https://j8seangel.carto.com/api/v2/sql?q=SELECT *, ST_AsGeoJSON(the_geom) as latLng FROM vizz_team';
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: TEAM_GET_LIST,
          payload: data.rows
        });
      });
  };
}
