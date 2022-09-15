import React from 'react';
import { useRoutes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ContactsPage from './components/ContactsPage';



function App() {
  let routes = useRoutes([
    {path:'/', element:<ContactsPage/> },
    {path:'login', element:<LoginPage/>}
  ])

  return (
    <main>
      <div className="wrapper">
        {routes}
      </div>
    </main>
  );
}

export default App;
