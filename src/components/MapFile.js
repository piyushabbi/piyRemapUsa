import React from 'react';
import PropTypes from 'prop-types';
import USAState from './USAState';

class USAMap extends React.Component {
	state = {
		showCode: false
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

	buildPaths = () => {
		let paths = [];
		for (let stateKey in this.props.data) {
			const path = (
				<USAState
					key={stateKey}
					dimensions={this.props.data[stateKey]['dimensions']}
					state={stateKey}
					fill={this.fillStateColor(stateKey)}
					mouseEventHandler={() => {
						this.props.titleHandler(
							stateKey,
							this.props.data[stateKey]['name']
						);
					}}
					name={this.props.data[stateKey]['name']}
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
					<g className="outlines">{this.buildPaths()}</g>
				</svg>
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
