import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getAdress: (token) => ({
    type: 'GET_ADRESS',
    payload: http(token).get('customer/adress'),
  }),
  createAdress: (token,data) => ({
    type: 'CREATE_ADRESS',
    payload: http(token).post('adress', qs.stringify({...data})),
  }),
};
