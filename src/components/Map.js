import React, { Component } from 'react';
import USAMap from './MapFile';

class App extends Component {
	state = {
		activeStates: ['MN', 'NY', 'HI', 'MD', 'TX', 'CA'],
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
				<h1>Map</h1>
				<div className="states">
					<h3>List of active states:-</h3>
					<ol>
						{this.state.activeStates.map(state => (
							<li key={state}>{state}</li>
						))}
					</ol>
				</div>
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
