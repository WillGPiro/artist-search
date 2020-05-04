import React, { useState } from 'react';
import Search from '../components/Search';

//Username 
const SearchControl = () => {
  const [text, setText] = useState('');
  const [submit, setSubmit] = useState([]);
  
  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    makeRequest(text)
      .then(submit => setSubmit(submit));
  };

  return (
    <Search 
      text={text}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default SearchControl;
