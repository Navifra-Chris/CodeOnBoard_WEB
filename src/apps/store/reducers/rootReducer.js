import { combineReducers } from 'redux';
import problem from './problem.reducer';
import match from './match.reducer'
import codeList from './codeList.reducer'
import replay from './replay.reducer'
import rankingProblem from './rankingProblem.reducer'
import auth from "../../redux/reducers/auth"

const rootReducer = combineReducers({
  auth,
  problem,
  match,
  codeList,
  replay,
  rankingProblem
});

export default rootReducer;