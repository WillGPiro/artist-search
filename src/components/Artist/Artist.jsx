import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Artist = ({ name, disambiguation, id }) => (
  <section>
    <h2><Link to={`/artist/${id}`}>{name}</Link></h2>
    <p>{disambiguation}</p>
  </section>
);

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  disambiguation: PropTypes.string,
  id: PropTypes.string.isRequired
};

export default Artist;

