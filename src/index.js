import { searchMovie } from './data/data.js';
import Movie from './models/movie.js';
import debounce from './helper/debounce.js';
import './components/search-bar.js';
import './styles/style.css';


document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.querySelector('search-bar');

  const searchEvent = async function(e) {
    try {
      const keyword = e.target.value;
      const { data } = await searchMovie(keyword);
      const { results } = data;
      e.target.parentElement.searchResults = results;
      e.target.parentElement.searchResults = results.map((movie) => new Movie({
        'backdropPath': movie.backdrop_path,
        'genreIds': movie.genre_ids,
        'originalLanguage': movie.original_language,
        'originalTitle': movie.original_title,
        'posterPath': movie.poster_path,
        'releaseDate': movie.release_date,
        'voteAverage': movie.vote_average,
        'voteCount': movie.vote_count,
        ...movie
      }));
    } catch (error) {
      console.log(error);
    }
  };

  searchBar.inputEvent = debounce((e) => searchEvent(e), 500);
});
