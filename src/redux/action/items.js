import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getItems: (
    token,
    limit = 5,
    page = 1,
    searchFilter = 'name',
    search = '',
    sortFilter = 'create_at',
    sort = 'ASC',
  ) => ({
    type: 'GET_ITEMS',
    payload: http(token).get(
      `item?search[${searchFilter}]=${search}&sortBy[${sortFilter}]=${sort}&limit=${limit}&page=${page}`,
    ),
  }),
  createAdress: (token, data) => ({
    type: 'CREATE_ADRESS',
    payload: http(token).post('adress', qs.stringify({ ...data })),
  }),
};
