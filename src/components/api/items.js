import axios from 'axios';

export const fetchItem = async () => {
  let url = 'http://localhost:8080/item';

  const { data } = await axios.get(url);
  return data;
};
export const deleteItems = async (id) => {
  let url = `http://localhost:8080/item/${id}`;
  const data = await axios.delete(url);
  return data;
};
