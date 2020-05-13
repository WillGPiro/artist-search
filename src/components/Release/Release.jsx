//http://musicbrainz.org/ws/2/recording?release=<RELEASE_ID>&fmt=json
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Release = ({ title, image, id }) => (
  <section>
    <h2><Link to= {`/recording/${id}`}>{title}</Link></h2>
    <img src={image} alt="Image of album or relsease"></img>
  </section>
);

Release.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Release;


