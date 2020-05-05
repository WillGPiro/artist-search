import React from  'react';
import { shallow } from 'enzyme';
import Release from './Release.jsx';

describe('Release', () => {
  it('Matches a snapshot of the Release component', () => {
    const wrapper = shallow (<Release
      title="Gloria"
      image="http://coverartarchive.org/release/03be9452-549a-4f30-a96f-44f794d50253/front"
    />);
    expect(wrapper).toMatchSnapshot();
  });
});

