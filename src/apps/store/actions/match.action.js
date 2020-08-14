export const SET_TIER = "SET_TIER"
export const SET_SCORE = "SET_SCORE"
export const SET_LANGUAGE = "SET_LANGUAGE"
export const SET_THUMBNAIL = "SET_THUMBNAIL"
export const GET_CODELIST = "GET_CODELIST"

export function setTier(param){
    return {
        type: SET_TIER,
        payload: param
    };
}

export function setScore(param){
    return {
        type: SET_SCORE,
        payload: param
    };
}

export function setLanguage(param){
    return {
        type: SET_LANGUAGE,
        payload: param
    };
}

export function setThumbnail(param){
    return {
        type: SET_THUMBNAIL,
        payload: param
    };
}

export function setCodeList(param){
    return {
        type: GET_CODELIST,
        payload: param
    };
}