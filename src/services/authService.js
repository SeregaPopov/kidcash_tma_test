import axios from 'axios';

const API_URL = 'http://node02.msk.prototypes.ventures:50105/api';

export const authenticateUser = async () => {
  const tg = window.Telegram.WebApp;
  const initData = tg.initData;
  const initDataUnsafe = tg.initDataUnsafe;

  try {
    const response = await axios.post(`${API_URL}/auth/telegram/`, {
      initData,
    });

    // Сохраняем токен в localStorage или context
    const token = response.data.access;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return response.data;
  } catch (error) {
    console.error('Authentication error:', error);
    throw error;
  }
};