import {default as axios} from 'axios'
import http from '../../helpers/http'

export default {
  getCategory: ()=>({
    type: 'GET_CATEGORY',
    payload: http().get('public/category')
  })
}