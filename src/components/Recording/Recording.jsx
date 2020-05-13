//Displays a lyrics of songs.
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Recording = ({ title, disambiguation, id }) => (
  <section>
    <h2><Link to={`/recording/${id}`}>{title}</Link></h2>
    <p>{disambiguation}</p>
  </section>
);

Recording.propTypes = {
  title: PropTypes.string.isRequired,
  disambiguation: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Recording;


