import http from '../../helpers/http'

export default {
  getAdress: (token)=>({
    type: 'GET_ADRESS',
    payload: http(token).get('customer/adress')
  })
}