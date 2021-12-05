import axios from 'axios'
import { parseCookies } from 'nookies'

export const request = axios.create({
    baseURL: process.env.BASE_URL,
})

export const requestWithAuth = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        Authorization: parseCookies()?.access_token || '',
    },
})
