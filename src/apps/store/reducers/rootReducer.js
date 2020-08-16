import { combineReducers } from 'redux';
import problem from './problem.reducer';
import match from './match.reducer'
import codeList from './codeList.reducer'

const rootReducer = combineReducers({
  problem,
  match,
  codeList
});

export default rootReducer;