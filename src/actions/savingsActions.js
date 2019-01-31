import {UPDATE_INCOME, UPDATE_EXP, UPDATE_VOTE } from "../reducers/savingsReducer";


export function updateIncome(data) {
    return {
        type: UPDATE_INCOME,
        payload: data
    }
}

export function updateExpenditures(data) {
    return {
        type: UPDATE_EXP,
        payload: data
    }
}

export function updateVote(vote) {
    return {
        type: UPDATE_VOTE,
        payload: vote
    }
}
