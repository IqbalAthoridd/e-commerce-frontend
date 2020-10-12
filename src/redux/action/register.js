import http from '../../helpers/http'
import qs from 'querystring'

export default {
  register: (data)=>({
    type: 'REGISTER',
    payload: http().post('http://localhost:8080/auth/customer/register',qs.stringify(data))
  }),
}