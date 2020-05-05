import React from 'React';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Artist = ({ name, disambiguation }) => (
  <section>
    <h2><Link to={`artist/${name}`}>{name}</Link></h2>
    <p>{disambiguation}</p>
  </section>
);

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  disambiguation: PropTypes.string.isRequired
};

export default Artist;

