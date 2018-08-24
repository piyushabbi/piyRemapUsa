import React, { Component } from 'react';
import USAMap from './MapFile';

class App extends Component {
	state = {
		activeStates: ['MN', 'NY', 'NE', 'TX', 'CA'],
		title: ''
	};

	statesFilling = () => {
		let stateFill = {};
		for (let state of this.state.activeStates) {
			if (!stateFill[state]) {
				stateFill[state] = {
					fill: '#dd4c13'
				};
			}
		}
		return stateFill;
	};

	titleHandler = (titleAbbr, titleFull) => {
		this.setState({ title: `${titleFull} (${titleAbbr})` });
	};

	render() {
		return (
			<div className="App">
				<h1>Active States: {JSON.stringify(this.state.activeStates)}</h1>
				<USAMap
					customize={this.statesFilling()}
					title={this.state.title}
					titleHandler={this.titleHandler}
				/>
			</div>
		);
	}
}

export default App;
