import axios from 'axios';

const api = axios.create({
	baseURL: 'https://sistema.pokeapp.com/',
	headers: {
		Authorization: `Bearer`,
		'Content-Type': 'application/json;charset=utf-8',
		charset: 'utf-8',
		'Cache-Control': 'no-cache',
	},
});

export default api;
