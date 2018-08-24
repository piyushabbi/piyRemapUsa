import React from 'react';
import PropTypes from 'prop-types';
import data from '../data/states_info.json';
import USAState from './USAState';

class USAMap extends React.Component {
	state = {
		showCode: false
	};

	clickHandler = stateAbbreviation => {
		this.props.onClick(stateAbbreviation);
	};

	fillStateColor = state => {
		if (
			this.props.customize &&
			this.props.customize[state] &&
			this.props.customize[state].fill
		) {
			return this.props.customize[state].fill;
		}

		return this.props.defaultFill;
	};

	stateClickHandler = state => {
		if (
			this.props.customize &&
			this.props.customize[state] &&
			this.props.customize[state].clickHandler
		) {
			return this.props.customize[state].clickHandler;
		}
		return this.clickHandler;
	};

	mouseEventHandler = (stateAbbr, stateFull) => {
		//alert(state);
		this.props.titleHandler(stateAbbr, stateFull);
	};

	buildPaths = () => {
		let paths = [];
		for (let stateKey in data) {
			const path = (
				<USAState
					key={stateKey}
					dimensions={data[stateKey]['dimensions']}
					state={stateKey}
					fill={this.fillStateColor(stateKey)}
					onClickState={this.stateClickHandler(stateKey)}
					mouseEventHandler={this.mouseEventHandler}
					name={data[stateKey]['name']}
				/>
			);
			paths.push(path);
		}
		return paths;
	};

	render() {
		return (
			<React.Fragment>
				<svg
					className="us-state-map"
					xmlns="http://www.w3.org/2000/svg"
					width={this.props.width}
					height={this.props.height}
					viewBox="0 0 959 593"
				>
					<title>{this.props.title}</title>
					<g className="outlines">
						{this.buildPaths()}
						<g className="DC state">
							<path
								className="DC1"
								fill={this.fillStateColor('DC1')}
								d="M801.8,253.8 l-1.1-1.6 -1-0.8 1.1-1.6 2.2,1.5z"
							/>
							<circle
								className="DC2"
								onClick={this.clickHandler}
								data-name={'DC'}
								fill={this.fillStateColor('DC2')}
								stroke="#FFFFFF"
								strokeWidth="1.5"
								cx="801.3"
								cy="251.8"
								r="5"
								opacity="1"
							/>
						</g>
					</g>
				</svg>

				<div className="show-json">
					<button
						onClick={() => {
							this.setState(prevState => ({
								showCode: !prevState.showCode
							}));
						}}
					>
						Toggle States Data
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

USAMap.propTypes = {
	onClick: PropTypes.func,
	width: PropTypes.number,
	height: PropTypes.number,
	title: PropTypes.string,
	defaultFill: PropTypes.string,
	customize: PropTypes.object
};

USAMap.defaultProps = {
	onClick: () => {},
	width: 959,
	height: 593,
	defaultFill: '#D3D3D3',
	title: 'Yo Man! Wadd up......',
	customize: {}
};

export default USAMap;
