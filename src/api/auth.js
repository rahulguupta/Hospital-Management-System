import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signin`, userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : "Server Error";
    }
};