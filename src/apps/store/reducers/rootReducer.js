import { combineReducers } from 'redux';
import problem from './problem.reducer';
import match from './match.reducer'
import codeList from './codeList.reducer'
import replay from './replay.reducer'
import rankingProblem from './rankingProblem.reducer'

const rootReducer = combineReducers({
  problem,
  match,
  codeList,
  replay,
  rankingProblem
});

export default rootReducer;