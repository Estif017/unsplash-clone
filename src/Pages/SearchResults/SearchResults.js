import React, { Component } from 'react';
import {
	SearchResultsContainer,
	LinkContainer,
	LinkStyles,
} from './SearchResults.styles';
import { SearchUsers, SearchPhotos, SearchCollections } from 'components';

export default class SearchResults extends Component {
	state = {
		active: '',
	};

	render() {
		const query = this.props.match.params.query;
		const location = this.props.history.location.pathname;
		const photos = `/search/photos/${query}`;
		const collections = `/search/collections/${query}`;
		const users = `/search/users/${query}`;
		return (
			<SearchResultsContainer>
				<LinkContainer>
					<LinkStyles to={photos}>Photos</LinkStyles>
					<LinkStyles to={collections}>Collection</LinkStyles>
					<LinkStyles to={users}>Users</LinkStyles>
				</LinkContainer>
				<hr />
				{location === photos && <SearchPhotos />}
				{location === collections && <SearchCollections />}
				{location === users && <SearchUsers />}
			</SearchResultsContainer>
		);
	}
}
