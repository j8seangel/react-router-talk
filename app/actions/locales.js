import { push } from 'react-router-redux';

export function updateLangURL(lang) {
  return (dispatch, state) => {
    let pathname = state().routing.locationBeforeTransitions.pathname;
    pathname = pathname !== '/'
      ? pathname.replace(/^\/[a-zA-Z]{2}/g, lang)
      : lang;
    dispatch(push(`/${pathname}`));
  };
}
