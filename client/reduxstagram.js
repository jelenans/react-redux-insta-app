//if there is no path => coming from node_modules
import React from 'react';
import { render } from 'react-dom';
// import css
import css from './styles/style.styl';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  // expose store to the entire app
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        {/* children of Main component: */}
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single} ></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));