const iState = {
    username:"",
    password:""
}

export const LoginReducer = (state = iState, action) => {
    switch(action.type) {
       
        case "USERNAME":
            return {
                ...state,
                username: action.payload
            }
        
        case "PASSWORD":
            return {
                ...state,
                password: action.payload
            }
        
        case "CLEAR_CREDENTIALS":
            return {
                ...state,
                password: action.payload
            }

        default: return state
    }
};
