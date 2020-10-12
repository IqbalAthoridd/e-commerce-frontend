import {default as axios} from 'axios'

export default {
  getDetails: (id)=>({
    type: 'GET_DETAILS',
    payload: axios.get(`http://localhost:8080/public/details/${id}`)
  })
}