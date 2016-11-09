import { MAP_UPDATE_PARAMS } from 'constants';

const initialState = {
  zoom: 3,
  lat: 22,
  lng: 17
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MAP_UPDATE_PARAMS: {
      return Object.assign({}, state, action.payload);
    }
    default:
      return state;
  }
}
