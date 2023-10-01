import _ from 'axios';

const axios = _.create({
  'headers': {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  'params': {
    'api_key': 'API_KEY_HERE'
  },
  'baseURL': 'https://api.themoviedb.org/3'
});

export default axios;
