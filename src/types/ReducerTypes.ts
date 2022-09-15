
export interface UserState {
    users: { id: number, name: string, phone: string }[]

}

export interface UserAction{
    type: string,
    payload: { id: number, name: string, phone: string }
}

export interface AuthReducerType{
    isAuth: boolean,
    email: string,
    password: string
}
export interface AuthAction{
    type:string
}

export interface AddContactType{
    active:  boolean,
    setActive: Function
}
export interface EditContactType{
    active:  boolean,
    setActive: Function,
    user: { id: number, name: string, phone: string }
}
export interface ContactsType{
    user: { id: number, name: string, phone: string }
}
