import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MapFile from './MapFile';

describe('MapFile Component', () => {
	let wrapper;

	beforeEach(() => {
		const titleHandler = jest.fn();
		wrapper = shallow(<MapFile />);
	});

	it('renders snapshot correctly', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('executes mouse event', () => {
		// console.log(wrapper.instance())
	});
});
