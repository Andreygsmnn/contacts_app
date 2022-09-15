import { UserAction,UserState} from "../types/ReducerTypes";

export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';



let initialState: UserState = {
    users: [
        { id: 1, name: 'Марина Игоревна Крутякова', phone: '89160056677' },
        { id: 2, name: 'Юрий Гагарин', phone: '89652584156' },
        { id: 3, name: 'Филатов Артем', phone: '89785256358' },
        { id: 4, name: 'Кузнец Обыкновенный Ильдарович ', phone: '89565886614' },
        { id: 5, name: 'Андрей Связь', phone: '8916054777' },
        { id: 6, name: 'Вячеслав Игнатьевич', phone: '89990056677' },
        { id: 7, name: 'Елена Воровская', phone: '83568956677' },
        { id: 8, name: 'Алексей Шиномонтаж', phone: '89666056677' },
        { id: 9, name: 'Андропова Юлия Олеговна', phone: '89870056677' },
        { id: 10, name: 'Артур Микаэлян', phone: '89160050000' },
    ]
}

const usersReducer = (state = initialState, action:UserAction): UserState => {
    switch (action.type) {
        case ADD_USER:
            return { ...state, users: [...state.users, action.payload] }
        case EDIT_USER:
            return { ...state, users: [...state.users.map(el => el.id === action.payload.id ? action.payload : el)] }
        case DELETE_USER:
            return { ...state, users: [...state.users.filter(el => el.id !== action.payload.id)] }
        default: return state;
    }
}


export default usersReducer;
