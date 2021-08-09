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
		this.state.searchTerm && this.props.className
			? this.props.history.push(`/search/collections/${this.state.searchTerm}`)
			: this.props.history.push(`/search/photos/${this.state.searchTerm}`);
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
					className={this.props.className ? this.props.className : ''}
					placeholder={this.props.className ? '+ Collection' : 'search...'}
					value={this.state.value}
					onChange={this.handleChange}
				/>
			</form>
		);
	}
}

const SearchForm = withRouter(Search);
export default SearchForm;
