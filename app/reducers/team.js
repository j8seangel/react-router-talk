import { TEAM_GET_LIST, TEAM_UPDATE_ACTIVE } from 'constants';

const initialState = {
  teamList: [],
  activeMembers: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TEAM_GET_LIST:
      return Object.assign({}, state, { teamList: action.payload });
    case TEAM_UPDATE_ACTIVE:
      return Object.assign({}, state, { activeMembers: action.payload });
    default:
      return state;
  }
}
