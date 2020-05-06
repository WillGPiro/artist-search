import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Song = ({ artist, trackTitle }) => (
  <section>
    <Link to={`/lyrics/${artist}/${trackTitle}`}></Link>
    <h2>{trackTitle}</h2>
  </section>
);

Song.propTypes = {
  artist: PropTypes.string.isRequired,
  trackTitle: PropTypes.string.isRequired
};

export default Song;
