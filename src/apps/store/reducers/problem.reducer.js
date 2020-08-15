import { 
    SUBMIT, 
    GET_DESCRIPTION,
    WRITE_CODE,
    WIRTE_CODENAME,
    SET_LANGUAGE,
} from '../actions/problem.action';

const initState = {
    isSubmit : false,
    desc : null,
    code : null,
    codeName : null,
    language : "Select Language"
}

const problem = (state = initState, action) => {
    switch(action.type){
        case SUBMIT:
            return {...state, isSubmit:action.payload};
        case GET_DESCRIPTION:
            return {...state, desc:action.payload}
        case WRITE_CODE:
            return {...state, code:action.payload}
        case WIRTE_CODENAME:
            return {...state, codeName:action.payload}
        case SET_LANGUAGE:
            console.log("set lang reducer")
            return {...state, language:action.payload}
        default:
            return state;
    }
}

export default problem;