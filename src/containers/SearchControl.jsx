import React, { useState } from 'react';
import Search from '../components/Search/Search';
import { artistRequest } from '../services/artistRequest';
import ArtistsList from '../components/Artist/ArtistsList';

//Username 
const SearchControl = () => {
  const [text, setText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    artistRequest(text)
      .then(results => setSearchResults(results));
  };
  console.log('HEEEEY', searchResults);

  return (
    <>
      <Search onChange={handleChange} onSubmit={handleSubmit} />
      <ArtistsList artistResults={searchResults} />
    </>
  );
};

export default SearchControl;
