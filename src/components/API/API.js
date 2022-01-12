import axios from 'axios';

const getResponse = async (animal) => {
  const response = await axios.get(`http://acnhapi.com/v1/${animal}/`);
  const values = Object.values(response.data);
  return values.map((item) => ({
    img: item.image_uri,
    name: item.name['name-EUru'],
    price: item.price,
  }));
};

export default getResponse;
