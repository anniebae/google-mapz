import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'

class App extends Component {
	componentDidMount() {
		console.log('componentDidMount')
	}

	render() {
		const location = {
			lat: 40.7575285,
			lng: -73.9884469
		}

		const markers = [
			{
				location: {
					lat: 40.7575285,
					lng: -73.9884469
				}
			},
			{
				location: {
					lat: 40.7484405,
					lng: -73.9878531
				}
			}
		]

		return (
			<div>
				This is the REACT APP!
				<div style={{width:300, height:600, background:'red'}}>
					<Map center={location}  markers={markers} />
				</div>

				<Places />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));


