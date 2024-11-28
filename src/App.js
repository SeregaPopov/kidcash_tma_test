import logo from './logo.svg';
import './App.css';

import React, { useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null); // Состояние для хранения информации о пользователе


  useEffect(() => {
    // Инициализируем Telegram Web Apps SDK
    const tg = window.Telegram.WebApp;
    //tg.expand(); // Разворачиваем приложение на весь экран

    // Получаем информацию о пользователе
    const fetchUserData = async () => {
      try {
        const userData = tg.initDataUnsafe.user; // Получаем данные о пользователе
        if (!userData) {
          throw new Error('Не удалось получить данные о пользователе');
        }
        setUser(userData); // Сохраняем данные о пользователе в состоянии
      } catch (err) {
        setError(err.message); // Сохраняем сообщение об ошибке в состоянии
      }
    };

    fetchUserData();
    

  }, []);

  return (
    <div className="App">

      {/* Отображение ошибок */}
      {error && (
        <div style={{ color: 'red' }}>
          <h2>Ошибка:</h2>
          <p>{error}</p>
        </div>
      )}

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
    </div>
  );
}

export default App;
