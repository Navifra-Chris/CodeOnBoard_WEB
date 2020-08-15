export const SUBMIT = "SUBMIT"
export const GET_DESCRIPTION = "GET_DESCRIPTION"
export const WRITE_CODE = "WRITE_CODE"
export const WIRTE_CODENAME = "WIRTE_CODENAME"
export const SET_LANGUAGE = "SET_LANGUAGE"

export function submit(param){
    return {
        type: SUBMIT,
        payload: param
    };
}

export function getDescription(param){
    return {
        type: GET_DESCRIPTION,
        payload: param
    };
}

export function writeCode(param){
    return {
        type: WRITE_CODE,
        payload: param
    };
}
export function writeCodeName(param){
    return {
        type: WIRTE_CODENAME,
        payload: param
    };
}
export function setLanguage(param){
    console.log("set lang ==>", param)
    return {
        type: SET_LANGUAGE,
        payload: param
    };
}


