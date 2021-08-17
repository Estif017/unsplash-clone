import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Input } from './SearchForm.styles';

class Search extends Component {
	state = {
		searchTerm: '',
	};
	input = React.createRef();
	handleChange = (e) => {
		this.setState({ searchTerm: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.searchTerm && this.props.formDisplay) {
			this.props.history.push(`/search/collections/${this.state.searchTerm}`);
		} else {
			this.props.history.push(`/search/photos/${this.state.searchTerm}`);
		}
		this.setState({ searchTerm: '' });
	};
	componentDidMount() {
		this.input.current.focus();
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Input
					id='search'
					ref={this.input}
					formDisplay={this.props.formDisplay}
					placeholder={this.props.formDisplay ? '+ Collection' : 'search...'}
					value={this.state.value}
					onChange={this.handleChange}
				/>
			</form>
		);
	}
}

const SearchForm = withRouter(Search);
export default SearchForm;
