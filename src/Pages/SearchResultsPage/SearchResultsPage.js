import React, { Component } from 'react';
import {
	SearchResultsContainer,
	LinkContainer,
	LinkStyles,
} from './SearchResultsPage.styles';
import { SearchUsers, SearchPhotos, SearchCollections } from 'components';

export default class SearchResultsPage extends Component {
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
				{location === photos && (
					<SearchPhotos
						addToPhotos={this.props.addToPhotos}
						showCarousel={this.showCarousel}
						closeCarousel={this.closeCarousel}
						{...this.props}
					/>
				)}
				{location === collections && (
					<SearchCollections addToCollections={this.props.addToCollections} />
				)}
				{location === users && <SearchUsers />}
			</SearchResultsContainer>
		);
	}
}