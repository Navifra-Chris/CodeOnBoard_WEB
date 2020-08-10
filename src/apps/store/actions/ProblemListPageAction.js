import { Page } from "tabler-react";

export const SET_PROBLEM_ID = "SET_PROBLEM_ID"
export const GET_PROBLEMS = "GET_PROBLEMS"

export function getProblems(param){
    return {
        type: GET_PROBLEMS,
        posts: param
    }
}

export function setProblemIdAction(param){
    console.log("===> Action")
    return {
        type: SET_PROBLEM_ID,
        id: param
    };
}

