// config.js
const API_URL = import.meta.env.DEV 
  ? "http://localhost:5000" 
  : import.meta.env.VITE_API_URL;

export default API_URL;