import { GET_PEOPLE_LIST } from 'constants';

export function getPeopleList() {
  const url = '/people.json';
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_PEOPLE_LIST,
          payload: data
        });
      });
  };
}
