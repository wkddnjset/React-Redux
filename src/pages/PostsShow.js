import React, { Component } from 'react';
import PostDetailsContainer from '../containers/PostDetailsContainer.js';
import PropTypes from 'prop-types';

class PostsShow extends Component {
	static contextTypes = {
    	router: PropTypes.object
  	};
  	render() {
   		return (
      		<div className="App">
        		<h1>PostsShow</h1>
        		<PostDetailsContainer id={this.props.match.params.id}/>
      		</div>
    	);
  	}
}

export default PostsShow;