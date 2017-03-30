export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error.message
  };
}

function fetchPostsSuccess(data) {
  return {
    type: FETCH_POSTS_SUCCESS,
    meta: {
      receivedAt: Date.now()
    },
    payload: data.data
  };
}

function fetchPosts() {
  return dispatch => {
    dispatch({
      type: FETCH_POSTS_REQUEST
    });
    return fetch('https://www.reddit.com/r/all/hot.json')
      .then((response) => response.json())
      .then(
        data => dispatch(fetchPostsSuccess(data)),
        error => dispatch(fetchPostsFailure(error))
      );
  };
}

function shouldFetchPosts(state) {
  const posts = state.posts;
  return !(posts.value.children instanceof Array || posts.isFetching);
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts());
    }
  };
}
