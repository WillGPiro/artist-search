import React from 'react';
import { shallow } from 'enzyme';
import ArtistsList from '../Artist/ArtistsList.jsx';

describe('Artist List component', () => {
  it('matches the ArtistLists component', () =>{
    const artistResults = [
      {
        id: 'a3cb23fc-acd3-4ce0-8f36-1e5aa6a18432',
        name: 'U2',
        disambigutation: 'Irish Rock Band'
      },
      {
        id: '704acdbb-1415-4782-b0b6-0596b8c55e46',
        name: 'U2',
        disambigutation: 'Akiyama, Uni'
      }
    ];

    const wrapper = shallow(<ArtistsList artistResults={artistResults} />);
    expect(wrapper).toMatchSnapshot();
  });
});

