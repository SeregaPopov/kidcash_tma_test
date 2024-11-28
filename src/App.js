import logo from './logo.svg';
import './App.css';

import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    // Инициализируем Telegram Web Apps SDK
    const tg = window.Telegram.WebApp;
    tg.expand(); // Разворачиваем приложение на весь экран
// Изменение заголовка приложения
tg.MainButton.text = "Нажми меня!";
tg.MainButton.show();
    

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
    </div>
  );
}

export default App;
