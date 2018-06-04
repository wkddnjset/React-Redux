import {
	FETCH_POSTSLEN, FETCH_POSTSLEN_SUCCESS, FETCH_POSTSLEN_FAILURE,
	FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, RESET_POSTS,
	FETCH_POST, FETCH_POST_SUCCESS,  FETCH_POST_FAILURE, RESET_ACTIVE_POST,
	CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE, RESET_NEW_POST,
	DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, RESET_DELETED_POST
} from '../actions/posts';

const INITIAL_STATE = 	{ 	
							postLength : {length:null, error:null, loading: false},
							postsList: {posts: [], error:null, loading: false},  
							newPost:{post:null, error: null, loading: false}, 
							activePost:{post:null, error:null, loading: false}, 
							deletedPost: {post: null, error:null, loading: false},
						};

// 상태 값에 따라
export default function(state = INITIAL_STATE, action) {
	let error;
	switch(action.type) {
		//--------------------------------
		// 
		// Post Length 액션
		//--------------------------------
		case FETCH_POSTSLEN:
			return{ ...state, postLength: {length:null, error:null, loading: true}};
		case FETCH_POSTSLEN_SUCCESS:// return list of posts and make loading = false
    		return { ...state, postLength: {length: action.payload, error:null, loading: false} };
  		case FETCH_POSTSLEN_FAILURE:// return error and make loading = false
    		error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    		return { ...state, postLength: {length: [], error: error, loading: false} };
		//--------------------------------
		// 
		// Post List 액션
		//--------------------------------
		case FETCH_POSTS:// start fetching posts and set loading = true
  			return { ...state, postsList: {posts:[], error: null, loading: true} }; 
  		case FETCH_POSTS_SUCCESS:// return list of posts and make loading = false
    		return { ...state, postsList: {posts: action.payload, error:null, loading: false} };
  		case FETCH_POSTS_FAILURE:// return error and make loading = false
    		error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    		return { ...state, postsList: {posts: [], error: error, loading: false} };
  		case RESET_POSTS:// reset postList to initial state
    		return { ...state, postsList: {posts: [], error:null, loading: false} };

    	//--------------------------------
		// 
		// Post 액션
		//--------------------------------
		case FETCH_POST:
			return { ...state, activePost:{...state.activePost, loading: true}};
		case FETCH_POST_SUCCESS:
			return { ...state, activePost: {post: action.payload, error:null, loading: false}};
		case FETCH_POST_FAILURE:
			error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
			return { ...state, activePost: {post: null, error:error, loading:false}};
		case RESET_ACTIVE_POST:
			return { ...state, activePost: {post: null, error:null, loading: false}};

		//--------------------------------
		// 
		// Post 생성 액션
		//--------------------------------
		case CREATE_POST:
			return {...state, newPost: {...state.newPost, loading: true}}
		case CREATE_POST_SUCCESS:
			return {...state, newPost: {post:action.payload, error:null, loading: false}}
		case CREATE_POST_FAILURE:
			error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
			return {...state, newPost: {post:null, error:error, loading: false}}
		case RESET_NEW_POST:
			return {...state,  newPost:{post:null, error:null, loading: false}}

		//--------------------------------
		// 
		// Post 삭제 액션
		//--------------------------------
		case DELETE_POST:
			return {...state, deletedPost: {...state.deletedPost, loading: true}}
		case DELETE_POST_SUCCESS:
			return {...state, deletedPost: {post:action.payload, error:null, loading: false}}
		case DELETE_POST_FAILURE:
			error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
			return {...state, deletedPost: {post:null, error:error, loading: false}}
		case RESET_DELETED_POST:
			return {...state,  deletedPost:{post:null, error:null, loading: false}}

		default:
			return state;
	}
}