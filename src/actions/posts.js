import axios from 'axios';

// Post Length
export const FETCH_POSTSLEN = 'FETCH_POSTSLEN';
export const FETCH_POSTSLEN_SUCCESS = 'FETCH_POSTSLEN_SUCCESS';
export const FETCH_POSTSLEN_FAILURE = 'FETCH_POSTSLEN_FAILURE';

//Post list
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const RESET_POSTS = 'RESET_POSTS';

//Create new post
export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';
export const RESET_NEW_POST = 'RESET_NEW_POST';

//Fetch post
export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const RESET_ACTIVE_POST = 'RESET_ACTIVE_POST';

//Delete post
export const DELETE_POST = 'DELETE_POST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
export const RESET_DELETED_POST = 'RESET_DELETED_POST';

// const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
const ROOT_URL = 'https://jsonplaceholder.typicode.com';

// Post 리스트 갯수
export function fetchPostsLength() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/posts`,
    headers: []
  });
  return {
    type: FETCH_POSTSLEN,
    payload: request
  };
}

// Post 리스트 갯수 파싱 성공
export function fetchPostsLengthSuccess(posts) {
  return {
    type: FETCH_POSTSLEN_SUCCESS,
    payload: posts
  };
}

// Post 리스트 갯수 파싱 실패
export function fetchPostsLengthFailure(posts) {
  return {
    type: FETCH_POSTSLEN_FAILURE,
    payload: posts
  };
}


// Post 리스트 파싱
export function fetchPosts() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/posts`,
    headers: []
  });
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

// Post 리스트 파싱 성공
export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  };
}

// Post 리스트 파싱 실패
export function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  };
}

// Post 리스트 파싱 초기화
export function resetPosts() {
  return {
    type: RESET_POSTS
  };
}

// Post 생성
export function createPost(props) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/posts`,
    headers: []
  });

  return {
    type: CREATE_POST,
    payload: request
  };
}

// Post 생성 성공
export function createPostSuccess(newPost) {
  return {
    type: CREATE_POST_SUCCESS,
    payload: newPost
  };
}

// Post 생성 실패
export function createPostFailure(error) {
  return {
    type: CREATE_POST_FAILURE,
    payload: error
  };
}

// Post 생성 초기화
export function resetNewPost() {
  return {
    type: RESET_NEW_POST
  };
}

// Post 파싱
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

// Post 파싱 성공
export function fetchPostSuccess(activePost) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: activePost
  };
}

// Post 파싱 실패
export function fetchPostFailure(error) {
  return {
    type: FETCH_POST_FAILURE,
    payload: error
  };
}

// Post 파싱 초기화
export function resetActivePost() {
  return {
    type: RESET_ACTIVE_POST
  };
}

// Post 삭제
export function deletePost(id) {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/posts/${id}`,
    headers: []
  });
  return {
    type: DELETE_POST,
    payload: request
  };
}

// Post 삭제 성공
export function deletePostSuccess(deletedPost) {
  return {
    type: DELETE_POST_SUCCESS,
    payload: deletedPost
  };
}

// Post 삭제 실패
export function deletePostFailure(response) {
  return {
    type: DELETE_POST_FAILURE,
    payload: response
  };
}

// Post 삭제 초기화
export function resetDeletedPost() {
  return {
    type: RESET_DELETED_POST
  };
}

