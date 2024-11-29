// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ role }) {
  return (
    <footer>
      {role === 'parent' ? (
        <>
          <Link to="/parent/dashboard">Задания</Link>
          <Link to="/parent/family-settings">Настройки Семьи</Link>
          <Link to="/parent/members">Члены Семьи</Link>
        </>
      ) : (
        <>
          <Link to="/child/tasks">Мои Задания</Link>
          <Link to="/child/achievements">Ачивки</Link>
          <Link to="/child/goals">Цели</Link>
        </>
      )}
    </footer>
  );
}

export default Footer;