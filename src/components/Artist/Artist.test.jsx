import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('It describes the Artist component', () => {
  it('matches a snapshot of Artist.jsx', () => {
    const wrapper = shallow(<Artist name="U2" disambiguation="Irish Rock Band" id="0ea9ada6-fe62-403c-af08-159af46a1a3a" />);
    expect(wrapper).toMatchSnapshot();
  });
});

