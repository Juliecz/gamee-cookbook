import axios from 'axios';

const api = axios.create({
	baseURL: process.env.API_SERVER || 'http://localhost:8080',
	headers: {
		'Content-Type': 'application/json'
	}
});

export default api;