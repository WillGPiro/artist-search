import React, { useState, useEffect } from 'react';
import RecordingsList from '../components/Recording/RecordingsList';
import { recordingRequest } from '../services/musicbrainz.js';
import PropTypes from 'prop-types';

const RecordingsContainer = ({ match }) => {
  const [recordings, setRecordings] = useState([]);

  useEffect(()=> {
    recordingRequest(match.params.releaseId)
      .then(res => setRecordings(res));
  }, []);

  return (
    <>
      <RecordingsList recordingResults={recordings} />
    </>
  );
};

RecordingsContainer.propTypes = {
  match: PropTypes.string.isRequired
};

export default RecordingsContainer;


