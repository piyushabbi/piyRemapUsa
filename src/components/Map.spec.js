import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Map from './Map';

describe('Map', () => {
	it('renders snapshot correctly', () => {
		const tree = shallow(<Map />);
    expect(toJson(tree)).toMatchSnapshot();
	});
});
