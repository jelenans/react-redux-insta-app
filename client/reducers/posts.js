function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      // copy the current state (no mutation, bcs we make pure / predictable functions)
      let newState = [...state];
      newState[action.index].likes++;
      return newState;
    default:
      return state;
  }
}

export default posts;