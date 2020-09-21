import axios from 'axios';

export const fetchItem = async (url2, url3, arr) => {
  let url = 'http://localhost:8080/item';
  if (arr === undefined) {
    arr = ['', 'ASC'];
  }
  if (url2) {
    url = `${url2}`;
  } else if (url3) {
    url = `${url3}`;
  } else if (arr.length) {
    console.log(arr[1]);
    // if (arr[0].length < 0) {
    //   arr[0] = '';
    // } else if (arr[1].length < 0) {
    //   arr[1] = 'ASC';
    // }
    url = `http://localhost:8080/item?search=${arr[0]}&sortTo=${arr[1]}`;
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
