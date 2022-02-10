import { ActionType } from "../../Actions/ActionTypes";

const iState = {
    msg:"Hi"
}

export const MsgReducer = (state = iState, action) => {
    switch(action.type) {
       
        case ActionType["MsgReducer"].MESSAGE.toString():
            return {
                ...state,
                msg: action.payload
            }

        default: return state
    }
};
