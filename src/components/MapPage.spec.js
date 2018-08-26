import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MapPage from './MapPage';

describe('MapPage', () => {
	it('renders snapshot correctly', () => {
		const tree = shallow(<MapPage />);
    expect(toJson(tree)).toMatchSnapshot();
	});
});
