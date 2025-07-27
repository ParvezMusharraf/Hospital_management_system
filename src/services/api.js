// services/api.js
import axios from '../@core/utils/axiosInstance'

// Auth APIs
export const loginUser = data =>
  axios.post('/user/login', data).then(res => {
    return res?.data
  })
export const signupUser = data => axios.post('/user/signup', data).then(res =>{
    return res?.data
})

// You can keep adding more API methods as needed...
