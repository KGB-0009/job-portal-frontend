import axios from 'axios'

const api = axios.create({
 baseURL: 'https://your-backend-name.up.railway.app/api'
})

export default api