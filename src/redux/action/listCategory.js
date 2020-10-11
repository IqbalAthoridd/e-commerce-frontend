import {default as axios} from 'axios'

export default {
  getData: ()=>({
    type: 'GET_CATEGORY',
    payload: axios.get('http://localhost:8080/public/category')
  })
}