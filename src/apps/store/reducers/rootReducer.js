import { combineReducers } from 'redux';
import problem from './problem.reducer';
import match from './match.reducer'

const rootReducer = combineReducers({
  problem,
  match
});

export default rootReducer;