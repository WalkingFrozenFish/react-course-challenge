import React, { useState } from 'react';
import CreateUser from './components/CreateUser/CreateUser';
import UserList from './components/UserList/UserList';

const App = () => {
  // Состояние где хранятся данные пользователей
  const [userList, setUserList] = useState([]);

  // Коллбек функция для добавления данных в состояние компонента App
  const addUserHandler = (user) => {
    setUserList([...userList, user]);
  }

  return (
    <div className="container">
      {/* Передаем коллбек функцию для добавления данных */}
      <CreateUser addUser={addUserHandler} />
      {/* Передаем данные состояния компонента App */}
      <UserList userList={userList} />
    </div>
  );
};

export default App;
