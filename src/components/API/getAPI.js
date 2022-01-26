import axios from 'axios';

const getResponse = async (materic = 'North America') => {
  const response = await axios.get(`https://corona.lmao.ninja/v2/continents/${materic}`);
  const responseData = response.data;
  return responseData;
};
export default getResponse;
