import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/redux_hook';
import { EditContactType } from '../types/ReducerTypes';
import '../styles/editContactModal.css';
import { editUser } from '../redux/actions';

function EditContactModal({ active, setActive, user }: EditContactType): JSX.Element {
    const dispatch = useAppDispatch()
    const [inputName, setInputName] = useState(user.name)
    const [inputPhone, setInputPhone] = useState(user.phone)
    const [id, setId] = useState(user.id)

    const handlerAddUser = () => {
        dispatch(editUser(inputName, inputPhone, id))
        setActive(false)
    }



    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>

            <div className="modal-edit-content" onClick={(e) => e.stopPropagation()}>
                <h2>Редактирование контакта</h2>
                <div className="modal-edit-inputs">
                    <input type="text" value={inputName} onChange={e => setInputName(e.target.value)} />
                    <input type="text" value={inputPhone} onChange={e => setInputPhone(e.target.value)} />
                </div>
                <div className="modal-edit-buttons">
                    <button className="edit-cancel" onClick={() => setActive(false)}>Отмена</button>
                    <button onClick={() => handlerAddUser()} >Сохранить</button>
                </div>
            </div>
        </div>
    )
}

export default EditContactModal;