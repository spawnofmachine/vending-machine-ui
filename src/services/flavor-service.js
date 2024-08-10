import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8080'
})

export default {
  listFlavor() {
    return http.get('/Flavor')
  },
  getFlavorById(id) {
    return http.get('/Flavor/' + id)
  },
  addFlavor(cup) {
    return http.post('/Flavor', cup)
  },
  updateFlavor(id, flavor) {
    return http.put('/Flavor' + id, flavor)
  },
  deleteFlavor(id) {
    return http.delete('/Flavor' + id)
  }
}
