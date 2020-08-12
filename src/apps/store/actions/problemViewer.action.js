export const INCREASE_PAGE = "INCREASE_PAGE"
export const DECREASE_PAGE = "DECREASE_PAGE"

export const increasePage = (param) => {
    console.log("===> increase page ")
    return {
        type: INCREASE_PAGE,
        id: param
    };
}

export const decreasePage = (param) => {
    console.log("===> decrease page ")
    return {
        type: DECREASE_PAGE,
        id: param
    };
}
