import React, { Component } from 'react';
import USAMap from './USAMap';
import data from '../data/states_info.json';

class MapPage extends Component {
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
			<React.Fragment>
				<h1>Map</h1>
				<div className="flex-container">
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
						data={data}
					/>
				</div>
				<div className="show-json">
					<button
						onClick={() => {
							this.setState(prevState => ({
								showCode: !prevState.showCode
							}));
						}}
					>
						{this.state.showCode ? 'Hide' : 'Show'} States Data
					</button>
					{/* Total States JSON*/}
					{this.state.showCode && (
						<pre>
							<code>{JSON.stringify(data, undefined, 4)}</code>
						</pre>
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default MapPage;
