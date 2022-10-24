import axios from 'axios'
const api = axios.create({
  baseURL: 'https://api.nytimes.com/svc/'
})
export const apiKey = {
  'api-key': process.env.REACT_APP_NYTIMES_APIKEY
}
export default api
