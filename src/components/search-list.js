/**
 * @class SearchList
 * @extends HTMLElement
 * @description Class to render search result
 */
export default class SearchList extends HTMLElement {
  /**
   * @description Constructor for creating search list component
   */
  connectedCallback() {
    this.render();
  }

  /**
   * @description Setter for search result
   * @param {Movie[]} searchResults - search result
   */
  set searchResults(searchResults) {
    this._searchResults = searchResults;
    this.render();
  };

  /**
   * @description render search list component
   */
  render() {
    this.innerHTML = '';
  }
};

customElements.define('search-list', SearchList);
