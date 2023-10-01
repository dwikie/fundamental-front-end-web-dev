import _ from 'axios';

const axios = _.create({
  'headers': {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  'params': {
    'api_key': 'ef1d0e84ed09b0da5c05b5b72abc088a'
  },
  'baseURL': 'https://api.themoviedb.org/3'
});

export default axios;
