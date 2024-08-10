import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8080'
})

export default {
  listDrink() {
    return http.get('/Drink')
  },
  getDrinkById(id) {
    return http.get('/Drink/' + id)
  },
  addDrink(cup) {
    return http.post('/Drink', cup)
  },
  updateDrink(id, drink) {
    return http.put('/Drink' + id, drink)
  },
  deleteDrink(id) {
    return http.delete('/Drink' + id)
  }
}
