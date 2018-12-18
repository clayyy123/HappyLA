import axios from 'axios';

const httpClient = axios.create();

httpClient.getInfo = function(name) {
  return this({ method: 'get', url: `/api/bar/yelp/${name}` });
};

export default httpClient;
