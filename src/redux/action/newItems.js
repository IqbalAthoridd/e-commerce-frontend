import {default as axios} from 'axios'
import http from '../../helpers/http'
export default {
  getData: ()=>({
    type: 'GET_DATA',
    payload: http().get('public/newItem')
  })
}