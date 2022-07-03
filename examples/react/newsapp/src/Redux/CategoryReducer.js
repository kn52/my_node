import { actions } from "./Action";


const iState = {
    category:"general",
    country: "in"
}
export const CategoryReducer = (state = iState, action) => {
    // {type:"cateogy",payload: ""}
    switch(action.type) {
        case actions.CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default: return state
    }
};