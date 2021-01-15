import http from '../../helpers/http'
import qs from 'querystring'

export default {
  login: (data)=>({
    type: 'AUTH_USER',
    payload: http().post('auth/login',qs.stringify(data))
  }),
  getProfile:(token)=>({
    type:'GET_PROFILE',
    payload:http(token).get('customer/profile')
  }),
  uploadImage:(token,data)=>({
    type:'UPLOAD_IMAGE',
    payload:http(token).patch('customer/myaccount',data)
  }),
  updateProfile:(token,data)=>({
    type:'UPDATE_DATA',
    payload:http(token).patch('customer/myaccount',qs.stringify(data))
  }),
  logout: ()=>({
    type: 'LOGOUT_USER'
  }),
  clearMessage: ()=>({
    type: 'CLEAR_MESSAGE'
  })
}