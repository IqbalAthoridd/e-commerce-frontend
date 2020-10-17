import {default as axios} from 'axios'
import http from '../../helpers/http'

export default {
  getDetails: (id)=>({
    type: 'GET_DETAILS',
    payload: http().get(`public/details/${id}`)
  })
}