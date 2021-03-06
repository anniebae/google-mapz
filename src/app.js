import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'
import superagent from 'superagent'

class App extends Component {
	constructor() {
		super()
		this.state = {
			venues: []
		}
	}

	componentDidMount() {
		console.log('componentDidMount')

		const url = 'https://api.foursquare.com/v2/venues/search?v=20140806&ll=40.7575285,-73.9884469&client_id=KPIGMRA32L30INFRQVANJDJHGQHJJ1XWGRFJDCZ2DNR4V3CS&client_secret=A0L1FCJXMICJEPHOF2AIXCUMUZFQZEFOI5MJEAT05ZYBIRHT'

		superagent
		.get(url)
		.query(null)
		.set('Accept', 'text/json')
		.end((error, response) => {
			
			const venues = response.body.response.venues
			console.log(JSON.stringify(venues))
			this.setState({
				venues: venues
			})
		})
	}

	render() {
		const location = {
			lat: 40.7575285,
			lng: -73.9884469
		}

		return (
			<div>
				This is the REACT APP!
				<div style={{width:300, height:600, background:'red'}}>
					<Map center={location}  markers={this.state.venues} />
				</div>

				<Places venues={this.state.venues} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));


