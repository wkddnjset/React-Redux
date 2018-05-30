import React, { Component } from 'react';
import { Route } from 'react-router';
import App from './pages/App';
import PostsIndex from './pages/PostsIndex';

class Routes extends Component {
  render() {
    return (
        <Route exact path="/" component={App}>
        <Route exact path="/" component={PostsIndex}/>
        </Route>
    );
  }
}

export default Routes;
