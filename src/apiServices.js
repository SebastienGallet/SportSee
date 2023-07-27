import mockedData from './data/mockeddata.json';
import axios from 'axios';

const USE_MOCKED_DATA = false;

const baseURL = 'http://localhost:3000';


export const getUserInfo = async (userId) => {
  if (USE_MOCKED_DATA) {
    try {
      const response = mockedData.USER_MAIN_DATA.find((user) => user.id === userId);
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
      return null;
    }
  } else {
    try {
      const response = await axios.get(`${baseURL}/user/${userId}`);
      return response.data.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
      return null;
    }
  }
};


export const getUserActivity = async (userId) => {
  if (USE_MOCKED_DATA) {
    try {
      const response = mockedData.USER_ACTIVITY.find((user) => user.userId === userId);
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'activité de l\'utilisateur :', error);
      return null;
    }
  } else {
    try {
      const response = await axios.get(`${baseURL}/user/${userId}/activity`);
      return response.data.data;
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'activité de l\'utilisateur :', error);
      return null;
    }
  }
};



export const getUserAverageSessions = async (userId) => {
  if (USE_MOCKED_DATA) {
    try {
      const response = mockedData.USER_AVERAGE_SESSIONS.find((user) => user.userId === userId);
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération des sessions moyennes de l\'utilisateur :', error);
      return null;
    }
  } else {
    try {
      const response = await axios.get(`${baseURL}/user/${userId}/average-sessions`);
      return response.data.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des sessions moyennes de l\'utilisateur :', error);
      return null;
    }
  }
};

export const getUserPerformance = async (userId) => {
  if (USE_MOCKED_DATA) {
    try {
      const response = mockedData.USER_PERFORMANCE.find((user) => user.userId === userId);
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération de la performance de l\'utilisateur :', error);
      return null;
    }
  } else {
    try {
      const response = await axios.get(`${baseURL}/user/${userId}/performance`);
      return response.data.data;
    } catch (error) {
      console.error('Erreur lors de la récupération de la performance de l\'utilisateur :', error);
      return null;
    }
  }
};
console.log(getUserPerformance(12))