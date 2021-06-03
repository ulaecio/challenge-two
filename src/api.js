import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/user/ulaecio'
});

export default api;