import logo from './logo.svg';
import './App.css';
import TaskList from './components/Child/TaskList';
import { authenticateUser } from './services/authService';



import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


function MyButton() {
  function handleClick()
  {
    alert('Вы нажали на меня!');
  }
  return (
    <button onClick={handleClick}>Я кнопка</button>
  );
}

function App() {
  const [user, setUser] = useState(null); // Состояние для хранения информации о пользователе
  const [error, setError] = useState(null); // Состояние для хранения ошибок
  
  /*
  useEffect(() => {
    // Инициализируем Telegram Web Apps SDK
    const tg = window.Telegram.WebApp;
    tg.expand(); // Разворачиваем приложение на весь экран
  // Изменение заголовка приложения
  tg.MainButton.text = "Нажми меня!";
  tg.MainButton.show();
    

  }, []);
  */



  useEffect(() => {

    if (window.Telegram && window.Telegram.WebApp) {
      // Инициализируем Telegram Web Apps SDK
      const tg = window.Telegram.WebApp;
      tg.expand(); // Разворачиваем приложение на весь экран
      
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


      /*
    // Вызов функции аутентификации
    const authenticate = async () => {
      try {
        const userData = await authenticateUser();
        console.log('User authenticated:', userData);
      } catch (error) {
        console.error('Authentication failed:', error);
      }
    };
    
    authenticate();
    */


    } else {
      console.error('Telegram WebApp SDK не доступен');
    }

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

      </header>
    </div>
  );
}

export default App;
