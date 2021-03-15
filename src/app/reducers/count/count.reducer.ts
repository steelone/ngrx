import { CountActions, CountActionsType } from "./count.actions"

export const countNode = 'count'

export interface CountState {
    count: number;
    updatedAt: number;
}

const initialState: CountState = {
    count: 0, 
    updatedAt: Date.now()
}

export const countReducer = (state:CountState = initialState, action: CountActions):CountState => {
    switch(action.type) {
        case CountActionsType.increase:
            return {
                ...state,
                count: state.count + 1
            };
        case CountActionsType.decrease:
            return {
                ...state,
                count: state.count - 1
            }
        case CountActionsType.clear:
            return {
                ...state,
                count: 0
            }        
        case CountActionsType.updatedAt:
            return {
                ...state,
                updatedAt: action.payload.updatedAt
            }

        default:
            return state
    }
}