export const SELECT_STONE = "SELECT_STONE"
export const SELECT_PLACEMENT_RULE = "SELECT_PLACEMENT_RULE"

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