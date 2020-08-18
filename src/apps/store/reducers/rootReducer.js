import { combineReducers } from 'redux';
import problem from './problem.reducer';
import match from './match.reducer'
import codeList from './codeList.reducer'
import replay from './replay.reducer'

const rootReducer = combineReducers({
  problem,
  match,
  codeList,
  replay
});

export default rootReducer;