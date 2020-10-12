import {default as axios} from 'axios'
import http from '../../helpers/http'

export default {
  getList: (name)=>({
    type: 'GET_LIST_CATEGORY',
    payload: http().get(`http://localhost:8080/public/category/${name}?sortBy[create_at]=ASC`)
  })
}