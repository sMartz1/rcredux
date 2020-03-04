import React, { Component }from 'react';
import { connect } from 'react-redux'


class MainApp extends Component{

	render(){
		const suggestions = this.props;
		console.log(suggestions);
		return (
			<div>hecho</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		suggestions: state.suggestions,
	}
};

;

export default connect(mapStateToProps)(MainApp);