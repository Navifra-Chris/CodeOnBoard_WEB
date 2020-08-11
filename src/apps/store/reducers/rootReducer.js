import { combineReducers } from 'redux';
import problem from './problem.reducer';
import getProblems from './getProblems.reducer';

const rootReducer = combineReducers({
  problem,
  getProblems
});

export default rootReducer;