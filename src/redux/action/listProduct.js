import {default as axios} from 'axios'
import http from '../../helpers/http'

export default {
  getList: (name)=>({
    type: 'GET_LIST_CATEGORY',
    payload: http().get(`public/category/${name}?sortBy[create_at]=ASC`)
  })
}