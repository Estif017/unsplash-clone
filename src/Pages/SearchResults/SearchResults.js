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
		const searchKey = this.props.match.params.id;
		const location = this.props.history.location.pathname;
		const photos = `/search/photos/${searchKey}`;
		const collections = `/search/collections/${searchKey}`;
		return (
			<SearchResultsContainer>
				<LinkContainer>
					<LinkStyles to={photos}>Photos</LinkStyles>
					<LinkStyles to={collections}>Collection</LinkStyles>
				</LinkContainer>
				<hr />
				{location === collections ? (
					<SearchCollections searchKey={searchKey} />
				) : (
					<SearchPhotos searchKey={searchKey} />
				)}
			</SearchResultsContainer>
		);
	}
}
