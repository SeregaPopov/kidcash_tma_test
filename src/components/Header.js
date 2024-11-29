// src/components/Header.js
import React from 'react';

function Header({ userProfile, balance, nextGoal, nextAchievement }) {
  return (
    <header>
      <img src={userProfile.avatar} alt="Avatar" />
      <h2>{userProfile.name}</h2>
      <div>
        <span>{balance.points}</span>
        <img src={userProfile.family.game_currency_image} alt="Game Currency" />
      </div>
      <div>
        <p>До {nextGoal.title}: {nextGoal.progress}%</p>
        <p>До {nextAchievement.title}: {nextAchievement.progress}%</p>
      </div>
    </header>
  );
}

export default Header;