import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// instead of react create class we do connect
// which takes in State (= posts, comments) & dispatch(=action creators from actionCreators.js)
// & is gonna map them to props ie expose them to components as props
const App = connect(
  mapStateToProps,
  mapDispatchToProps)(Main);
// (Main) -> It will take regular Main component and 
// add all of the data from state and dispatch to props
export default App;