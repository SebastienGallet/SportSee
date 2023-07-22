import axios from 'axios';

const baseURL = 'http://localhost:3000';

export const getUserInfo = async (userId) => {
  try {
    const response = await axios.get(`${baseURL}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
    return null;
  }
};

export const getUserActivity = async (userId) => {
  try {
    const response = await axios.get(`${baseURL}/user/${userId}/activity`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'activité de l\'utilisateur:', error);
    return null;
  }
};

export const getUserAverageSessions = async (userId) => {
  try {
    const response = await axios.get(`${baseURL}/user/${userId}/average-sessions`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des sessions moyennes de l\'utilisateur:', error);
    return null;
  }
};

export const getUserPerformance = async (userId) => {
  try {
    const response = await axios.get(`${baseURL}/user/${userId}/performance`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération de la performance de l\'utilisateur:', error);
    return null;
  }
};
