import axios from 'axios';

export const fetchItem = async (url2, url3) => {
  let url = 'http://localhost:8080/item';
  if (url2) {
    url = `${url2}`;
  } else if (url3) {
    url = `${url3}`;
  }
  console.log(url3);
  const { data } = await axios.get(url);
  return data;
};
export const deleteItems = async (id) => {
  let url = `http://localhost:8080/item/${id}`;
  const data = await axios.delete(url);
  return data;
};
