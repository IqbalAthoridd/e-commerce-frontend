import {default as axios} from 'axios'
import http from '../../helpers/http'
export default {
  getPopular: ()=>({
    type: 'GET_POPULAR',
    payload: http().get('public/popular')
  })
}