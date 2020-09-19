import axios from 'axios';

export const fetchItem = async () => {
  let url = 'http://localhost:8080/item';

  const { data } = await axios.get(url);
  return data;
};
