'use strict';
import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { i18nState } from "redux-i18n"

import * as reducers from 'reducers';
import Routes from './routes/routes';

import './styles/lib/custom-foundation.css';
import 'react-select/dist/react-select.css';
import './styles/main.pcss';

/**
 * Reducers
 * @info(http://redux.js.org/docs/basics/Reducers.html)
 * @type {Object}
 */
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
  i18nState
});

/**
 * Global state
 * @info(http://redux.js.org/docs/basics/Store.html)
 * @type {Object}
 */
const middlewareRouter = routerMiddleware(browserHistory);
const store = createStore(
  reducer,
  compose(
    /* The router middleware MUST be before thunk otherwise the URL changes
    * inside a thunk function won't work properly */
    applyMiddleware(middlewareRouter, thunk),
    /* Redux dev tool, install chrome extension in
     * https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en */
    process.env.NODE_ENV === 'development' && typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);

/**
 * HTML5 History API managed by React Router module
 * @info(https://github.com/reactjs/react-router/tree/master/docs)
 * @type {Object}
 */
const history = syncHistoryWithStore(browserHistory, store);

// Google Analytics
// process.env.NODE_ENV === 'production' && ReactGA.initialize(config.googleAnalytics);

render(
  <Provider store={store}>
    {/* Tell the Router to use our enhanced history */}
    <Routes history={history}/>
  </Provider>,
  document.getElementById('app')
);

export default function dispatch(action) {
  store.dispatch(action)
}
