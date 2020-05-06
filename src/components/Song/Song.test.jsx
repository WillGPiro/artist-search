import React from  'react';
import { shallow } from 'enzyme';
import Song from './Song.jsx';

describe('Song', () => {
  it('Matches a snapshot of the Song component', () => {
    const wrapper = shallow (<Song
      lyrics="LALALALALALALA"
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
