// src/components/Child/Tasks/TaskList.js
import React, { useEffect, useState } from 'react';
//mport axios from 'axios';
import api from '../../services/apiService';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/api/tasks/')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке задач:', error);
      });
  }, []);

  return (
    <div>
      <h1>Мои Задания</h1>
      {tasks.map(task => (
        <div key={task.id}>
          <img src={task.illustration} alt={task.title} />
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Баллы: {task.reward_points}</p>
          <button onClick={() => handleTaskComplete(task.id)}>Сделал</button>
        </div>
      ))}
    </div>
  );
}

function handleTaskComplete(taskId) {
  api.post(`/api/tasks/${taskId}/mark_completed/`)
    .then(response => {
      alert('Задача отмечена как выполненная');
      // Обновите список задач или статус задачи
    })
    .catch(error => {
      console.error('Ошибка при отметке задачи:', error);
    });
}

export default TaskList;