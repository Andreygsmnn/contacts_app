import { AuthReducerType, AuthAction } from "../types/ReducerTypes";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


const initialState = {
    isAuth: false,
    email: 'abc@gmail.com',
    password: '12345'
}


export const authReducer = (state = initialState, action:AuthAction):AuthReducerType => {
    switch (action.type) {
        case LOGIN:
            return { ...state, isAuth: true }
        case LOGOUT:
            return { ...state, isAuth: false }
        default: return state;
    }
}


