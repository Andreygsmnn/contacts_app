import { ADD_USER, EDIT_USER, DELETE_USER } from './usersReducer';
import { LOGIN, LOGOUT } from './authReducer';

export function inputLogin() {
    return { type: LOGIN }
}

export function outputLogin() {
    return { type: LOGOUT }
}

export function addUser(name:string, phone:string, id: number = Date.now()) {
    return { type: ADD_USER, payload: { name, phone, id } }
}
export function deleteUser(id:number,name:string, phone:string ) {
    return { type: DELETE_USER, payload:{ name, phone, id } }
}

export function editUser(name: string, phone:string, id:number) {
    return { type: EDIT_USER, payload: { name, phone, id } }
}

