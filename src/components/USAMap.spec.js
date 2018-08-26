import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import USAMap from './USAMap';

describe('USAMap Component', () => {
	let wrapper;

	beforeEach(() => {
		const titleHandler = jest.fn();
		wrapper = shallow(<USAMap />);
	});

	it('renders snapshot correctly', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('executes mouse event', () => {
		// console.log(wrapper.instance())
	});
});
