import React, { Component } from 'react';
import PostsFormContainer from '../containers/PostFormContainer.js';

class PostsNew extends Component {
  render() {
    return (
      <div className="App">
        <h1>PostsNew</h1>
        <PostsFormContainer />
      </div>
    );
  }
}

export default PostsNew;