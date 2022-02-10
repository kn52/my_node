import { ActionType } from "../../Actions/ActionTypes";

const iState = {
    username:"",
    password:""
}

export const LoginReducer = (state = iState, action) => {
    
    switch(action.type) {
       
        case ActionType["LoginReducer"].USERNAME.toString():
            return {
                ...state,
                username: action.payload
            }
        
        case ActionType["LoginReducer"].PASSWORD.toString():
            return {
                ...state,
                password: action.payload
            }
        
        case ActionType["LoginReducer"].CLEAR_CREDENTIALS.toString():
            return {
                ...state,
                password: action.payload
            }

        default: 
            return state
    }
};
