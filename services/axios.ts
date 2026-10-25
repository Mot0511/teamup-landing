import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.teamupp.ru',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api