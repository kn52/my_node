import * as actionTypes  from "../../../Actions/Counter/CounterActions";

const iState: any = {
    counter: 0,
    hits: 0
}


export const CounterReducer = (state: any = iState, action: any): any => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: (action.count + 1),
                hits: (action.hits + 1)
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: (action.count - 1),
                hits: (action.hits + 1)
            }
        case actionTypes.RESET:
            return {
                ...state,
                counter: action.count,
                hits: action.hits
            }
        default:
            return state
    }
}