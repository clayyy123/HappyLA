import axios from 'axios';

const httpClient = axios.create();

httpClient.getInfo = function(name) {
  return this({ method: 'get', url: `/api/bar/yelp/${name}` });
};

httpClient.submitInfo = function(fields) {
  return this({ method: 'post', url: '/api/bar/new', data: fields });
};

export default httpClient;
