import axios from 'axios'
const api = axios.create({
  baseURL: 'http://api.mediastack.com/v1/news'
})
export const apiKey = {
  access_key: process.env.REACT_APP_MEDIASTACK_APIKEY
}
export default api
