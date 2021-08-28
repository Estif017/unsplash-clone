import React from 'react';
import {
	SearchResultsContainer,
	LinkContainer,
	LinkStyles,
} from './SearchResultsPage.styles';
import { SearchUsers, SearchPhotos, SearchCollections } from 'components';

const SearchResultsPage = (props) => {
	const query = props.match.params.query;
	const location = props.history.location.pathname;
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
				<SearchPhotos addToPhotos={props.addToPhotos} {...props} />
			)}
			{location === collections && (
				<SearchCollections addToCollections={props.addToCollections} />
			)}
			{location === users && <SearchUsers />}
		</SearchResultsContainer>
	);
};

export default SearchResultsPage;
