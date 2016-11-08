import { GET_PEOPLE_LIST } from 'constants';

const initialState = {
  peopleList: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PEOPLE_LIST:
      return Object.assign({}, state, { peopleList: action.payload });
    default:
      return state;
  }
}
