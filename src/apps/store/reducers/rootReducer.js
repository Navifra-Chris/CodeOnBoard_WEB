import { combineReducers } from 'redux';
import setProblemId from './setProblemId.reducer';
import getProblems from './getProblems.reducer';

const rootReducer = combineReducers({
  setProblemId,
  getProblems
});

export default rootReducer;