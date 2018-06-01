import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class PostsList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts(posts) {
    return posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <NavLink style={{color:'black'}} to={"/posts/"+post.id}>
            <h3 className="list-group-item-heading">{post.title}</h3>
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const { posts, loading, error } = this.props.postsList;

    if(loading) {
      return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div className="container">
        <h1>Posts</h1>
        <ul className="list-group">
          {this.renderPosts(posts)}
        </ul>
      </div>
    );
  }
}

export default PostsList;
