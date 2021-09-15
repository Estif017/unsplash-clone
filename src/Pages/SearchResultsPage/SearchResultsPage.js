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
				<LinkStyles
					to={photos}
					active={location === photos ? 'underline' : 'none'}>
					Photos
				</LinkStyles>
				<LinkStyles
					to={collections}
					active={location === collections ? 'underline' : 'none'}>
					Collection
				</LinkStyles>
				<LinkStyles
					to={users}
					active={location === users ? 'underline' : 'none'}>
					Users
				</LinkStyles>
			</LinkContainer>
			<hr />
			{location === photos && <SearchPhotos />}
			{location === collections && <SearchCollections />}
			{location === users && <SearchUsers />}
		</SearchResultsContainer>
	);
};

export default SearchResultsPage;
