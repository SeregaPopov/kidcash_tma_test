// src/components/Parent/Tasks/TaskConfirm.js
import React, { useState } from 'react';
//import axios from 'axios';
import api from '../../services/apiService';

function TaskConfirm({ task }) {
  const [tipPercentage, setTipPercentage] = useState(0);
  const [comment, setComment] = useState('');

  const handleApprove = () => {
    api.post(`/api/tasks/${task.id}/approve_task/`, {
      tip_percentage: tipPercentage,
      comment: comment,
    })
      .then(response => {
        alert('Задача подтверждена');
        // Обновите список задач
      })
      .catch(error => {
        console.error('Ошибка при подтверждении задачи:', error);
      });
  };

  return (
    <div>
      <h2>Подтверждение Задачи</h2>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <label>
        Чаевые (%):
        <input
          type="number"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
        />
      </label>
      <label>
        Комментарий:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <button onClick={handleApprove}>Подтвердить</button>
    </div>
  );
}

export default TaskConfirm;