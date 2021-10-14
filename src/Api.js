import React, { Component } from "react";

class App extends Component {
	state = {
		data: [],
	};

	componentDidMount(){

		// for some reason the opensearch won't return the content unlike the one in tutorial
		const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';
		
		fetch(url)
			// the below code doesnt work bc it doesnt return, the returned thing
			// is next passed as the result for the next func
			// .then(
			// 	(result) => {result.json()}
			// )
			.then((result)=>result.json())
			// why put setSet in then? maybe to avoid using another var? 
			.then((result) => {
				this.setState({
					data: result,
				})
			})
	}

	render() {
		// display here
		const {data} = this.state;
		// the below code doesnt work bc I forgot to return anything XD
		// const dataToShow = data.map(
		// 	(entry) => {
		// 		<li>{entry}</li>
		// 	}
		// );

		const dataToShow = data.map((entry, index) => {
			return <li key={index}>{entry}</li>;
		})
		
		return <ul>{dataToShow}</ul>;
	}
}

export default App;