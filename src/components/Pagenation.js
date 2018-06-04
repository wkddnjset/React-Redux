import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pagenation extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    console.log(this.props);
    const prev_id = (parseInt(this.props.postId) - 1);
    const next_id = (parseInt(this.props.postId) + 1);
    const last_id = (parseInt(this.props.postsLen)+1);

    if (prev_id===0) {
      return (
        <div className="container">
          <a href='/'><span> Home </span></a>
          <a href={"/posts/"+next_id}><span> Next </span></a>
        </div>
            );
    }else if(next_id===last_id) {
      return (
        <div className="container">
          <a href={"/posts/"+prev_id}><span> Prev </span></a>
          <a href='/'><span> Home </span></a>
        </div>
            );
    }

    return (
      <div className="container">
        <a href={"/posts/"+prev_id}><span> Prev </span></a>
        <a href='/'><span> Home </span></a>
        <a href={"/posts/"+next_id}><span> Next </span></a>
      </div>

    );
  }
}

export default Pagenation;