import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Input } from './SearchForm.styled';

class Search extends Component {
	state = {
		searchTerm: '',
	};

	handleChange = (e) => {
		this.setState({ searchTerm: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.history.push(`/search/collections/${this.state.searchTerm}`);
		this.setState({ searchTerm: '' });
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Input
					placeholder='search...'
					value={this.state.value}
					onChange={this.handleChange}
				/>
			</form>
		);
	}

	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired,
	};
}

const SearchForm = withRouter(Search);
export default SearchForm;
