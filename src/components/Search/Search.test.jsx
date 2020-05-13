import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('It describes the search component', () => {
  it('matches a snapshot of Search.jsx', () => {
    const wrapper = shallow(<Search 
      text="U2"
      onSubmit={()=>{}}
      artistName="U2"
      onChange={()=>{}}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});



