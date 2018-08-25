import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from './App';

describe('<App /> Component', () => {
	it('renders App component', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		expect(ReactDOM.unmountComponentAtNode(div)).toEqual(true);
	});

	it('renders a 1 child Compoent', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.children().length).toEqual(1);
	});

	it('matches snapshot', () => {
		const tree = shallow(<App />);
		expect(toJson(tree)).toMatchSnapshot();
	});
});
