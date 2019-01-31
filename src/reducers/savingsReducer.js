export const UPDATE_EXP = "UPDATE_EXP";
export const UPDATE_INCOME = "UPDATE_INCOME";
export const UPDATE_VOTE = "UPDATE_VOTE";

import initialData from "../../initialData";
import { updateInputs, calculateSavings } from "../helpers/reducerHelpers";

const initialSavings = calculateSavings(initialData);
const initialState = {
    inputsData: initialData,
    savings: initialSavings,
    vote: null
};

export default function savings(state = initialState, action) {
    switch (action.type) {
        case UPDATE_EXP:
            const newExp = {
                incomes: state.inputsData.incomes,
                expenditures: updateInputs(state.inputsData.expenditures, action.payload),
            };
            return {...state, 
                inputsData: newExp,
                savings: calculateSavings(newExp)
            }
        case UPDATE_INCOME:
            const newInc = {
                expenditures: state.inputsData.expenditures,
                incomes: updateInputs(state.inputsData.incomes, action.payload)
            };
            return {...state, 
                inputsData: newInc,
                savings: calculateSavings(newInc)
            }
        case UPDATE_VOTE: 
            return {...state, vote: action.payload}
        default:
            return state;
    }
}