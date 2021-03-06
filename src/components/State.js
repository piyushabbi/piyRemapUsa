import React from 'react';

const State = props => {
	return (
		<path
			d={props.dimensions}
			fill={props.fill}
			data-name={props.state}
			className={`${props.state} state`}
			onClick={props.onClickState}
			onMouseOver={() => {
				props.mouseEventHandler(props.state, props.name);
			}}
		/>
	);
};

export default State;
