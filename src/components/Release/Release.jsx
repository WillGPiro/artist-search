//http://musicbrainz.org/ws/2/recording?release=<RELEASE_ID>&fmt=json
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Release = ({ title, image }) => (
  <section>
    <h2><Link to= {`title/${title}`}>{title}</Link></h2>
    <img src={image} alt="Image of album or relsease"></img>
  </section>
);

Release.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isREquired
};

export default Release;


