//Artist detail page (presentational component) with all releases.
//Paging through releases
//http://musicbrainz.org/ws/2/release?artist=<ARTIST_ID>&fmt=json

import React from 'React';
import PropTypes from 'prop-types';

const Artist = () => (
  <p>{name}</p>
);

Artist.propTypes = {
  name: PropTypes.isRequired
};

export default Artist;

