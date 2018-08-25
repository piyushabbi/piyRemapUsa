import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MapFile from './MapFile';

describe('MapFile Component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<MapFile />);
	});

	it('renders snapshot correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});