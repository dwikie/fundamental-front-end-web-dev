/**
 * @classdesc Movie data model
 */
export default class Movie {
  /**
   * @constructor
   * @param {boolean} adult - adult
   * @param {string} backdropPath - backdrop path
   * @param {int[]} genreIds - genre ids
   * @param {number} id - id
   * @param {string} originalLanguage - original language
   * @param {string} originalTitle - original title
   * @param {string} overview - overview
   * @param {number} popularity - popularity
   * @param {string} posterPath - poster path
   * @param {string} releaseDate - release date
   * @param {string} title - title
   * @param {boolean} video - video
   * @param {number} voteAverage - vote average
   * @param {number} voteCount - vote count
   */
  constructor({ adult,
    backdropPath,
    genreIds,
    id,
    originalLanguage,
    originalTitle,
    overview,
    popularity,
    posterPath,
    releaseDate,
    title,
    video,
    voteAverage,
    voteCount
  }) {
    this.adult = adult;
    this.backdropPath = `https://image.tmdb.org/t/p/w500${backdropPath}`;
    this.genreIds = genreIds;
    this.id = id;
    this.originalLanguage = originalLanguage;
    this.originalTitle = originalTitle;
    this.overview = overview;
    this.popularity = popularity;
    this.posterPath = `https://image.tmdb.org/t/p/w500$${posterPath}`;
    this.releaseDate = releaseDate;
    this.title = title;
    this.video = video;
    this.voteAverage = voteAverage;
    this.voteCount = voteCount;
  }
}
