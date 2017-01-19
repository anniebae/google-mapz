import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './Components/Map'

class App extends Component {
	render() {
		return (
			<div>
				This is the REACT APP!
				<Map />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));


