import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/redux_hook';
import {AddContactType} from '../types/ReducerTypes';
import '../styles/addContactModal.css';
import { addUser } from '../redux/actions';


function AddContactModal({ active, setActive }:AddContactType) {
    const dispatch = useAppDispatch()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const handlerAddUser = () => {
        dispatch(addUser(name, phone))
        setActive(false)
        setName('')
        setPhone('')
    }



    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>

            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Добавление контакта</h2>
                <div className="modal-inputs">
                    <input type="text" placeholder='Введите имя абонента' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder='Введите номер абонента' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="modal-buttons">
                    <button className="cancel" onClick={() => setActive(false)}>Отмена</button>
                    <button onClick={() => handlerAddUser()} >Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default AddContactModal