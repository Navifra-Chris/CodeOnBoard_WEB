import { 
    SET_TIER,
    SET_SCORE,
    SET_LANGUAGE,
    SET_THUMBNAIL,
    GET_CODELIST
} from '../actions/match.action';

const initState = {
    tier : null,
    score : null,
    language : null,
    thumbnail : null,
    codeList : null
}

const match = (state = initState, action) => {
    switch(action.type){
        case SET_TIER:
            return {...state, tier:action.payload}
        case SET_SCORE:
            console.log("SET SCORE==>", action)
            return {...state, score:action.payload}
        case SET_LANGUAGE:
            return {...state, language:action.payload}
        case SET_THUMBNAIL:
            return {...state, thumbnail:action.payload}
        case "GET_CODELIST":
            console.log("GET_CODELIST ==>", action, {...state, codeList:action.payload})
            return {...state, codeList:action.payload}
        default:
            return state;
    }
}

export default match;