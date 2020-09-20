import { Search } from '@material-ui/icons';
import axios from 'axios';

export const fetchItem = async (url2, url3, arr) => {
  let url = 'http://localhost:8080/item';
  if (arr == undefined) {
    arr = ['ppp'];
  }
  if (url2) {
    url = `${url2}`;
  } else if (url3) {
    url = `${url3}`;
  } else if (arr.length) {
    let Search = `search=${arr[0]}`;
    url = `http://localhost:8080/item?${Search}`;
  }

  const { data } = await axios.get(url);
  console.log(data);
  return data;
};
export const deleteItems = async (id) => {
  let url = `http://localhost:8080/item/${id}`;
  const data = await axios.delete(url);
  return data;
};
