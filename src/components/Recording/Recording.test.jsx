import React from 'react';
import { shallow } from 'enzyme';
import Recording from './Recording.jsx';

describe('It describes the Recording component', () => {
  it('Matches a snapshot of Recording.jsx', () => {
    const wrapper = shallow (<Recording 
      title="Hush" 
      disambiguation="album version" />);
    expect(wrapper).toMatchSnapshot();
  });
});

