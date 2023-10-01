/**
 * @classdesc Movie detail data model
 */
class MovieDetail {
  /**
   * @constructor
   * @param {boolean} adult - adult
   * @param {string} backdropPath - backdrop path
   * @param {int} budget - budget
   * @param {array} genres - genres
   * @param {string} homepage - homepage
   * @param {int} id - id
   * @param {string} imdbId - imdb id
   * @param {string} originalLanguage - original language
   * @param {string} originalTitle - original title
   * @param {string} overview - overview
   * @param {float} popularity - popularity
   * @param {string} posterPath - poster path
   * @param {array} productionCompanies - production companies
   * @param {array} productionCountries - production countries
   * @param {string} releaseDate - release date
   * @param {int} revenue - revenue
   * @param {number} runtime - runtime
   * @param {array} spokenLanguages - spoken languages
   * @param {string} status - status
   * @param {string} tagline - tagline
   * @param {string} title - title
   * @param {number} voteAverage - vote average
   * @param {number} voteCount - vote count
   */
  constructor({
    adult,
    backdropPath,
    budget,
    genres,
    homepage,
    id,
    imdbId,
    originalLanguage,
    originalTitle,
    overview,
    popularity,
    posterPath,
    productionCompanies,
    productionCountries,
    releaseDate,
    revenue,
    runtime,
    spokenLanguages,
    status,
    tagline,
    title,
    voteAverage,
    voteCount
  }) {
    // map parameter
    this.adult = adult;
    this.backdropPath = `https://image.tmdb.org/t/p/w500${backdropPath}`;
    this.budget = budget;
    this.genres = genres;
    this.homepage = homepage;
    this.id = id;
    this.imdbId = imdbId;
    this.originalLanguage = originalLanguage;
    this.originalTitle = originalTitle;
    this.overview = overview;
    this.popularity = popularity;
    this.posterPath = `https://image.tmdb.org/t/p/w500${posterPath}`;
    this.productionCompanies = productionCompanies;
    this.productionCountries = productionCountries;
    this.releaseDate = releaseDate;
    this.revenue = revenue;
    this.runtime = runtime;
    this.spokenLanguages = spokenLanguages;
    this.status = status;
    this.tagline = tagline;
    this.title = title;
    this.voteAverage = voteAverage;
    this.voteCount = voteCount;
  }
}

export default MovieDetail;
