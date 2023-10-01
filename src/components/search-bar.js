import './search-list.js';
/**
 * @class SearchBar
 * @extends HTMLElement
 * @description Class for creating search bar component
 */
class SearchBar extends HTMLElement {
  /**
   * @description Constructor for creating search bar component
   */
  connectedCallback() {
    this.render();
  }

  /**
   * @description Setter for search results
   * @param {Movie[]} searchResults - search result
   */
  set searchResults(searchResults) {
    this._searchResults = searchResults;
  }

  /**
   * @description Setter for click event
   * @param {function} event - click event
   */
  set inputEvent(event) {
    this._inputEvent = event;
    this.render();
  }

  /**
   * @description Getter for value
   * @return {string} value - value
   */
  get value() {
    return this.querySelector('#searchElement').value;
  }

  /**
   * @description Render search bar component
   * @return {void}
   */
  render() {
    this.innerHTML = `
       <style>
        input[type="search"]#searchElement {
          padding: 4px;
          border: none;
          border-radius: 4px;
          box-sizing: border-box;
          background-color: transparent;
          color: #ffffff;
          font-size: 16px;
          width: 100%;
        }

        input[type="search"]#searchElement:focus {
          outline: none;
        }

        input[type="search"]#searchElement+span {
          position: absolute;
          z-index: 1;
          width: 0%;
          bottom: 0;
          left: 0;
          border-bottom: 2px solid #ffffff50;
          border-radius: 4px;
          transition: width 500ms ease;
        }

        input[type="search"]#searchElement:focus+span {
          width: 100%;
        }
      </style>
      <input placeholder="Search movies" id="searchElement" type="search">
      <span></span>
    `;

    this.querySelector('#searchElement').addEventListener('input', this._inputEvent);

    const searchList = document.createElement('search-list');
    searchList.searchResults = this._searchResults;
    this.appendChild(searchList);
  }
}

customElements.define('search-bar', SearchBar);
