import { CHANGE_PAGE } from '../actions/problemViewer.action';

const initState = {
    numPages :null,
    selectedPage : 1
}

export const problemViewer = (state = initState, action) => {
    switch(action.type){
        case INCREASE_PAGE:
            console.log("=========> increase page", action)
            return {...state, selectedPage: selectedPage+1};
        case DECREASE_PAGE:
            console.log("=========> decrease page", action)
            return {...state, selectedPage: selectedPage-1};
        default:
            console.log("=========> dafault", action)
            return state;
    }
}

