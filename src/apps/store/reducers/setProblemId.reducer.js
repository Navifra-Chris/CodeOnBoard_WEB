import { SET_PROBLEM_ID } from '../actions/ProblemListPageAction';

const problemIdInitialState = {
    id :0
}

const setProblemId = (state = problemIdInitialState, action) => {
    switch(action.type){
        case SET_PROBLEM_ID:
            console.log("=========>",action)
            return Object.assign({}, state, {
                id: action.id
            });
        default:
            console.log("=========> dafault", action)
            return state;
    }
}

export default setProblemId;