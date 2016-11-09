import { TEAM_GET_LIST, TEAM_UPDATE_ACTIVE } from 'constants';

const initialState = {
  teamList: [],
  activeTeam: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TEAM_GET_LIST:
      return Object.assign({}, state, { teamList: action.payload });
    case TEAM_UPDATE_ACTIVE:
      return Object.assign({}, state, { activeTeam: action.payload });
    default:
      return state;
  }
}
