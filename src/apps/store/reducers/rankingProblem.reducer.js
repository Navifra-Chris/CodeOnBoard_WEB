import { SET_RANKING } from "../actions/rankingProblem.action"

const initStata = {
    userList: null,
}

const codeList = (state = initStata, action) => {
    switch(action.type){
        case SET_RANKING:
            return {...state, userList:action.payload};
        default:
            return state;
    }
}

export default codeList