import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export const getTodos = async () => (await axios.get(`${API_URL}/todos`)).data;
export const addTodo = async text => (await axios.post(`${API_URL}/todos`, { text })).data;