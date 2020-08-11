export const CHANGE_NAV = "CHANGE_NAV"

export function changeNav(param){
    console.log("===> Change Nac ")
    return {
        type: CHANGE_NAV,
        payload: param
    };
}

