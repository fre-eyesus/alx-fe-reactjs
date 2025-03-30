import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};