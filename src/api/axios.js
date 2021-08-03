import axios from 'axios'

// const api = axios.create({
//   baseURL: 'https://REDACTED/',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })

const api = {
  post: () => ({ data: {
      id: 0,
      name: 'oi',
      text: 'alo'
    }
  })
}

export default api
