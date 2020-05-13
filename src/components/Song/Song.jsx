import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Song = ({ artist, trackTitle, lyrics }) => (
  <section>
    <h2><Link to={`/lyrics/${artist}/${trackTitle}`}></Link></h2>
    <h2>{trackTitle}</h2>
    <h3>{lyrics}</h3>
  </section>
);

Song.propTypes = {
  artist: PropTypes.string.isRequired,
  trackTitle: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired
};

export default Song;
