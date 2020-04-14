function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // return existing state + the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      return state.filter(comment => state.indexOf(comment) !== action.i);
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // override this post with a new one:
      // proceed piece of state we wanna change & the action
      // `[]` so that the key canm be a `variable`
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  // if this reducer gets called for sth else
  // we just want to return the state & dont touch it
  // => always return state in reducer!
  return state;
}

export default comments;