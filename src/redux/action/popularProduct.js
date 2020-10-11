import {default as axios} from 'axios'
import http from '../../helpers/http'
export default {
  getPopular: ()=>({
    type: 'GET_POPULAR',
    payload: http().get('http://localhost:8080/public/popular')
  })
}