import { combineReducers } from 'redux';
import problem from './problem.reducer';

const rootReducer = combineReducers({
  problem,
});

export default rootReducer;