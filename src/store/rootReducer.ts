import { combineReducers } from 'redux';
// import { History } from 'history';

// import { connectRouter } from 'connected-react-router';
import profileReducer from 'store/profile/reducer';

// const rootReducer = (history: History) => combineReducers({
const rootReducer = combineReducers({
  // router: connectRouter(history),
  profile: profileReducer,
});

export default rootReducer;
