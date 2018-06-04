import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import Pagenation from './Pagenation'

class PostDetails extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUnmount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
    this.props.fetchPosts();
  }

  render() {
    const postsLen = this.props.postsList.posts.length;
    const { post, loading, error } = this.props.activePost;

    if (loading) {
      return <div className="container">Loading...</div>;
    } else if(error) {
      return  <div className="alert alert-danger">{error.message}</div>
    } else if(!post) {
      return <span />
    }

    return (
      <div className="container">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <Pagenation postId={this.props.postId} postsLen={postsLen}/>
      </div>

    );
  }
}

export default PostDetails;