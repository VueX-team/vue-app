import axios from '../axios'

export const AUTH = {
  REGISTER: async (params) => {
    return await axios.post('/users', params)
  },
  LOGIN: async (params) => {
    return await axios.post('/auth/login', params)
  }
}
