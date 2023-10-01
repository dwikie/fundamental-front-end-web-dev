import axios from '../helper/axios';


export const getPopularMovies = async (page = 1) => {
  try {
    const data = await axios.get(`/movie/popular?page=${page}&region=ID`);
    return data;
  } catch (error) {
    return new Error(error);
  }
};

export const getUpcomingMovies = async (page = 1) => {
  try {
    const data = await axios.get(`/movie/upcoming?page=${page}&region=ID`);
    return data;
  } catch (error) {
    return new Error(error);
  }
};

export const getMovieDetail = async (id) => {
  try {
    const data = await axios.get(`/movie/${id}`);
    return data;
  } catch (error) {
    return new Error(error);
  }
};

export const searchMovie = async (query, page = 1) => {
  try {
    const data = await axios.get(`/search/movie?query=${query}&${page}=1&region=ID&include_adult=true`);
    return data;
  } catch (error) {
    return new Error(error);
  }
};
