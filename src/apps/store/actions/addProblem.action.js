export const SELECT_STONE = "SELECT_STONE"
export const SELECT_PLACEMENT_RULE = "SELECT_PLACEMENT_RULE"
export const SELECT_PLACEMENT_DIR = "SELECT_PLACEMENT_DIR"
export const SELECT_ACTION_CONDITION = "SELECT_ACTION_CONDITION"
export const SELECT_ACTION_DIR = "SELECT_ACTION_DIR"
export const SELECT_ACTION_METHOD = "SELECT_ACTION_METHOD"
export const SELECT_ENDING_RULE = "SELECT_ENDING_RULE"
export const SET_LENGTH1 = "SET_LENGTH1"
export const SET_LENGTH2 = "SET_LENGTH2"

export function selectStone(param){
    return{
        type: SELECT_STONE,
        payload: param
    }
}

export function selectPlacementRule(id, param){
    return{
        type: SELECT_PLACEMENT_RULE,
        id: id,
        payload: param
    }
}

export function selectPlacementDir(id, param){
    return{
        type: SELECT_PLACEMENT_DIR,
        id: id,
        payload: param
    }
}

export function selectActionCondition(id, param){
    return{
        type: SELECT_ACTION_CONDITION,
        id: id,
        payload: param
    }
}

export function selectActionDir(id, param){
    return{
        type: SELECT_ACTION_DIR,
        id: id,
        payload: param
    }
}

export function selectActionMethod(id, param){
    return{
        type: SELECT_ACTION_METHOD,
        id: id,
        payload: param
    }
}

export function selectEndingRule(param){
    return{
        type: SELECT_ENDING_RULE,
        payload: param
    }
}

export function setLength1(id, param){
    return{
        type: SET_LENGTH1,
        id: id,
        payload: param
    }
}

export function setLength2(id, param){
    return{
        type: SET_LENGTH2,
        id: id,
        payload: param
    }
}