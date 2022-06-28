import { get } from './request'

export const getUsers = () => get(`https://randomuser.me/api/?results=35`)
