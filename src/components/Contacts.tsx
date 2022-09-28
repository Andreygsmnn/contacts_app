import React, { useState } from 'react';
import { deleteUser } from '../redux/actions';
import { ContactsType } from '../types/ReducerTypes';
import { useAppDispatch } from '../hooks/redux_hook';
import EditContactModal from './EditContactModal';
import '../styles/contacts.css';

function Contacts({ user }: ContactsType): JSX.Element {
  const dispatch = useAppDispatch()
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="card-wrapper">
      <div className="card-items">
        <div className="card-item">{user.name}</div>
        <div className="card-item">{user.phone}</div>
      </div>
      <div className="card-buttons">
        <button className="edit" onClick={() => setModalActive(true)}>Редактировать</button>
        <button className="delete" onClick={() => dispatch(deleteUser(user.id, user.name, user.phone))}>Удалить</button>
      </div>
      <EditContactModal active={modalActive} setActive={setModalActive} user={user} />
    </div>
  )
}

export default Contacts