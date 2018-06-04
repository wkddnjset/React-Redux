import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { reduxForm, Field, SubmissionError } from 'redux-form';
import renderField from './renderField';
import renderTextArea from './renderTextArea';
import { createPost, createPostSuccess, createPostFailure, resetNewPost } from '../actions/posts';


// 프런트 단에 뿌려줄 에러 메세지
function validate(values) {
  const errors = {};

  if (!values.title || values.title.trim() === '') {
    errors.title = 'Enter a Title';
  }
  if (!values.body || values.body.trim() === '') {
    errors.body = 'Enter some body';
  }

  return errors;
}

// Post 생성 시 필드별 에러 (i.e. not instant check)
const CreatePost = (values, dispatch) => {
  return dispatch(createPost(values))
    .then(result => {
      // Note: Error's "data" is in result.payload.response.data (inside "response")
      // success's "data" is in result.payload.data
      if (result.payload.response && result.payload.response.status !== 200) {
        dispatch(createPostFailure(result.payload.response.data));
        throw new SubmissionError(result.payload.response.data);
      }
      //let other components know that everything is fine by updating the redux` state
      dispatch(createPostSuccess(result.payload.data)); //ps: this is same as dispatching RESET_USER_FIELDS
    });
}

class PostForm extends Component {
	static contextTypes = {
    	router: PropTypes.object
  	};

  	componentWillMount() {
	    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
	    //always reset that global state back to null when you REMOUNT
	    this.props.resetMe();
  	}

  	componentWillReceiveProps(nextProps) {
    	if (nextProps.newPost.post && !nextProps.newPost.error) {
      		this.context.router.push('/');
    	}
  	}

  	renderError(newPost) {
    if (newPost && newPost.error && newPost.error.message) {
      	return (
        	<div className="alert alert-danger">
          		{ newPost ? newPost.error.message : '' }
        	</div>
        );
    } 
    else {
      		return <span></span>
    	}
  	}

  	render() {
    	console.log(this.props);
    	console.log(this.context);
    	const {handleSubmit, submitting, newPost} = this.props;
    return (
      		<div className="container">
      			{ this.renderError(newPost) }
      			<form onSubmit={ handleSubmit(CreatePost) }>
		          	<Field
		                 name="title"
		                 type="text"
		                 component={ renderField }
		                 label="제목" />
		          	<Field
		                 name="Body"
		                 component={ renderTextArea }
		                 label="내용" />
		          	<div>
		            	<button
		                    type="submit"
		                    className="btn btn-primary"
		                    disabled={ submitting }>
		              		생성
		            	</button>
		            	<NavLink
		                  	to="/"
		                  	className="btn btn-error"> 취소
		            	</NavLink>
		          </div>
		        </form>
      		</div>
    	);
  	}
}

export default reduxForm({
  form: 'PostForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(PostForm)