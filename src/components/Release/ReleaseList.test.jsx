import React from 'react';
import { shallow } from 'enzyme';
import ReleasesList from '../Release/ReleasesList.jsx';

describe('ReleaseList component', () => {
  it('matches the ReleaseLists component', () =>{
    const releaseResults = [
      {
        title: 'Gloria',
        image: 'http://coverartarchive.org/release/03be9452-549a-4f30-a96f-44f794d50253/front',
      },
      {
        title: 'Gloria',
        image: 'http://coverartarchive.org/release/03be9452-549a-4f30-a96f-44f794d50253/front'
      }
    ];

    const wrapper = shallow(<ReleasesList releaseResults={releaseResults} />);
    expect(wrapper).toMatchSnapshot();
  });
});
