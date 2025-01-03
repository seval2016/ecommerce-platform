import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Gerekirse değiştirin

export const loginUser = async (credentials: { email: string; password: string }) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
};

export const registerUser = async (userInfo: { email: string; password: string }) => {
    const response = await axios.post(`${API_URL}/register`, userInfo);
    return response.data;
};
