import { 
    SELECT_STONE,
    SELECT_PLACEMENT_RULE
} from "../actions/addProblem.action"

const initStata = {
    problemName : null,
    limitTime : null,
    limitMemory : null,
    boardSize : null,
    initBoard : null,
    selectedStone: 0,
    rules: [
        {
            id: 0,
            placementRule:null,
            actionRule:null,
        },
        {
            id: 1,
            placementRule:null,
            actionRule:null,
        },
        {
            id: 2,
            placementRule:null,
            actionRule:null,
        },
        {
            id: 3,
            placementRule:null,
            actionRule:null,
        }
    ],
}

const addProblem
 = (state = initStata, action) => {
    switch(action.type){
        case SELECT_STONE:
            return {...state, selectedStone:action.payload};
        case SELECT_PLACEMENT_RULE:
            return {...state, rules:state.rules.map(rule => rule.id === action.id?
                { ...rule, placementRule:action.payload}: rule)};
        default:
            return state;
    }
}

export default addProblem
