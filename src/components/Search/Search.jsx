//Search by Artist name returns array of artist with similar name by score.
//Allow paging through artists Check 4/30 or 5/1 pagination. 
//http://musicbrainz.org/ws/2/artist?query=<SEARCH>&fmt=json&limit=25
// Search should display a list of matching artists
// Use `http://musicbrainz.org/ws/2/artist?query=<SEARCH>&fmt=json&limit=25`
// * BONUS: As you type into the input box update a `searchTerm`query string.
//   Navigating directly to a URL with a `searchTerm` query string pre-fills
//   the search form.

import React from 'React';
import PropTypes from 'prop-types';

const Search = ({ text, onSubmit, artistName = 'text', onChange }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name={artistName} value={text} onChange={onChange} />
    <button>Search</button>
  </form>
);

Search.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  artistName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;



 
 
