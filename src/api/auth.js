import axios from 'axios';

const API_URL = 'http://localhost:5000/api/patients';

// 1. LOGIN ke liye
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signin`, userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : "Server Error";
    }
};

// 2. SIGNUP ke liye (Data Store karne ke liye)
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        return response.data; // Server se aane wala pura JSON return karega
    } catch (error) {
        // Agar error aata hai toh pura error object throw karein
        throw error; 
    }
};