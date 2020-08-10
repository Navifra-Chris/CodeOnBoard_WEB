import { GET_PROBLEMS }from '../actions/ProblemListPageAction'

const problemsInitialState = {
    posts : []
}
const getProblems = (state = problemsInitialState, action) =>{
    switch(action.type){
        case GET_PROBLEMS:
            return Object.assign({}, state, {
                posts: action.posts
            });
        default:
            return state;
    }
}

export default getProblems;