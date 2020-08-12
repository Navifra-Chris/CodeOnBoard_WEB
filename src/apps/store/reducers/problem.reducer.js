import { CHANGE_NAV } from '../actions/problem.action';

const initState = {
    selected_nav_id : 0
}

const problem = (state = initState, action) => {
    switch(action.type){
        case CHANGE_NAV:
            console.log("=========> change nav", action)
            return {...state, selected_nav_id:action.id};
        default:
            console.log("=========> dafault", action)
            return state;
    }
}

export default problem;