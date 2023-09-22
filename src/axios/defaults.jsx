import axios from 'axios'

export const auth = axios.create({
    baseURL: 'https://honestbrand-api.onrender.com',
    withCredentials: true
})