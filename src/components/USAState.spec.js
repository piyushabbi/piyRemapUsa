import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import USAState from './USAState';

describe('<USAState /> Component', () => {
	it('renders USAState Component', () => {
		const wrapper = shallow(
			<USAState key="MI" dimensions="M644.5,211" state="MI" fill="#d3d3d3" />
		);
		expect(wrapper.length).toBe(1);
	});

	it('renders with correct props', () => {
		const wrapper = shallow(
			<USAState key="MI" dimensions="M644.5,211" state="MI" fill="#d3d3d3" />
		);
		// console.log(wrapper.props());
		expect(wrapper.props().d).toBe('M644.5,211');
		expect(wrapper.props().fill).toBe('#d3d3d3');
		expect(wrapper.props()['data-name']).toBe('MI');
	});

	it('should call mouseover event', () => {
		const mouseEventHandler = jest.fn();
		const onMouseOver = jest.fn(() => {
			mouseEventHandler('MI', "Michigan");
		});
		const wrapper = shallow(
			<USAState 
				mouseEventHandler={onMouseOver}
				state="MI"
				name="Michigan"
			/>
		);
		wrapper.simulate('mouseover');
		expect(onMouseOver).toHaveBeenCalled();
		expect(mouseEventHandler).toHaveBeenCalledWith('MI', "Michigan");
	});

	it('should match snapshot', () => {
		const tree = shallow(
			<USAState key="MI" dimensions="M644.5,211" state="MI" fill="#d3d3d3" />
		);
		expect(toJson(tree)).toMatchSnapshot();
	});
});
