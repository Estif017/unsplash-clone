import React, { Component } from 'react';
import {
	SearchResultsContainer,
	LinkContainer,
	LinkStyles,
} from './SearchResults.styles';
import SearchPhotos from 'components/SearchPhotos';
import SearchCollections from 'components/SearchCollections';

export default class SearchResults extends Component {
	state = {
		active: '',
	};
	render() {
		const query = this.props.match.params.query;
		const location = this.props.history.location.pathname;
		const photos = `/search/photos/${query}`;
		const collections = `/search/collections/${query}`;
		return (
			<SearchResultsContainer>
				<LinkContainer>
					<LinkStyles to={photos}>Photos</LinkStyles>
					<LinkStyles to={collections}>Collection</LinkStyles>
				</LinkContainer>
				<h1>{query}</h1>
				<hr />
				{location === collections ? <SearchCollections /> : <SearchPhotos />}
			</SearchResultsContainer>
		);
	}
}
