const iState = {
    msg:"Hi"
}

export const MsgReducer = (state = iState, action) => {
    switch(action.type) {
       
        case "MESSAGE":
            return {
                ...state,
                msg: action.payload
            }

        default: return state
    }
};
