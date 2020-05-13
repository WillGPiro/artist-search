import React, { useState, useEffect } from 'react';
import SongList from '../components/Song/SongList.jsx';
import { songRequest } from '../services/musicbrainz.js';
import PropTypes from 'prop-types';

const SongsContainer = ({ match }) =>{
  const [songs, setSongs] = useState([]);

  useEffect(()=> {
    songRequest(match.params.artist.title)
      .then (res => setSongs(res));
  }, []);

  return (
    <>
      <SongList songResults={songs} />
    </>
  );
};

SongsContainer.propTypes = {
  match: PropTypes.string.isRequired
};

export default SongsContainer;


