import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8080'
})

export default {
  listCup() {
    return http.get('/Cup')
  },
  getCupById(id) {
    return http.get('/Cup/' + id)
  },
  addCup(cup) {
    return http.post('/Cup', cup)
  },
  updateCup(id, cup) {
    return http.put('/Cup' + id, cup)
  },
  deleteCup(id) {
    return http.delete('/Cup' + id)
  }
}
