import { SET_PROBLEM_ID } from '../actions/ProblemPage';
import { combineReducers} from 'redux'

const problemIdInitialState = {
    id :0
}

const setProblemId = (state = problemIdInitialState, action) => {
    switch(action.type){
        case SET_PROBLEM_ID:
            return Object.assign({}, state, {
                id: action.id
            });
        default:
            return state;
    }
}

const problemPageReducer = combineReducers({
    setProblemId
});

export default problemPageReducer