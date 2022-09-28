import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Contacts from './Contacts';
import { outputLogin } from '../redux/actions';
import AddContactModal from './AddContactModal';
import { useAppDispatch, useAppSelector } from '../hooks/redux_hook';
import '../styles/contactspage.css';


function ContactsPage(): JSX.Element {

  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(state => state.auth.isAuth)
  const initStateUsers = useAppSelector(state => state.users.users)

  const [value, setValue] = useState('')
  const searchedUsers = initStateUsers.filter(user => {
    return user.name.toLowerCase().includes(value.toLowerCase())
  })

  const [modalActive, setModalActive] = useState(false)



  return (
    isAuth ?
      <div>
        <div className="container-contacts-page">
          <div className="wrapper-header">
            <header className="header-contacts-page">
              <h1>Список контактов</h1>
              <input type="search" placeholder="поиск" onChange={(e) => setValue(e.target.value)} />
            </header>
            <div className="important-buttons">
              <button onClick={() => dispatch(outputLogin())}>Выйти из профиля</button>
              <button onClick={() => setModalActive(true)}>Добавить контакт</button>
            </div>
          </div>
          {searchedUsers.length > 0
            ?
            <main className="card-contacts">
              {searchedUsers.map(user => <Contacts user={user} key={user.id} />)}
            </main>
            :
            <span>Контакт не найден</span>
          }
          <AddContactModal active={modalActive} setActive={setModalActive} />
        </div>
      </div>
      :
      <Navigate to='login' />
  )
}

export default ContactsPage