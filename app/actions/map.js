import { push } from 'react-router-redux';
import { MAP_UPDATE_PARAMS } from 'constants';

export function updateMapURL(params) {
  return (dispatch, state) => {
    const map = `${params.lat}/${params.lng}/${params.zoom}`;

    const team = state().team.activeTeam;
    const query = team.length ? `?team=${team.join(',')}` : '';

    const lang = state().i18nState.lang;
    dispatch(push(`/${lang}/map/${map}${query}`));
  };
}

export function updateMapParams(data) {
  return dispatch => {
    const params = {
      zoom: data.zoom,
      lat: data.lat,
      lng: data.lng
    };
    dispatch({
      type: MAP_UPDATE_PARAMS,
      payload: params
    });
  };
}
