import logo from './logo.svg';
import './App.css';

import React, { useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null); // Состояние для хранения информации о пользователе


  useEffect(() => {
    // Инициализируем Telegram Web Apps SDK
    const tg = window.Telegram.WebApp;
    tg.expand(); // Разворачиваем приложение на весь экран

        // Получаем информацию о пользователе
        const userData = tg.initDataUnsafe.user; // Получаем данные о пользователе
        setUser(userData); // Сохраняем данные о пользователе в состоянии


    

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        {/* Отображение информации о пользователе */}
        {user ? (
        <div>
          <h2>Информация о пользователе:</h2>
          <p>Имя: {user.first_name}</p>
          <p>Фамилия: {user.last_name}</p>
          <p>Username: {user.username}</p>
          <p>ID: {user.id}</p>
        </div>
      ) : (
        <p>Загрузка информации о пользователе...</p>
      )}
    </div>
  );
}

export default App;
