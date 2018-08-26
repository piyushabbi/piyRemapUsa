import React, { Component } from 'react';
import './App.css';
// import Map from './MapDander';
import MapPage from './components/MapPage';

class App extends Component {
	render() {
		return (
			<div className="App">
				<MapPage />
			</div>
		);
	}
}

export default App;
