import React, { useState, useEffect } from 'react';
import ReleasesList from '../components/Release/ReleasesList.jsx';
import { releaseRequest } from '../services/musicbrainz.js';
import PropTypes from 'prop-types';

const ReleasesContainer = ({ match }) => {
  const [releases, setReleases] = useState([]);
 
  useEffect(()=> {
    releaseRequest(match.params.artistId)
      .then(res => setReleases(res));
  }, []);

  return (
    <>
      <ReleasesList releaseResults={releases}  />
    </>
  );
};

ReleasesContainer.propTypes = {
  match: PropTypes.string.isRequired
};

export default ReleasesContainer;

