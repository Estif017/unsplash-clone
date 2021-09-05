import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import CollectionsWall from 'components/CollectionsWall';
import { useParams } from 'react-router-dom';
import {
	searchCollectionSelector,
	loadingSelector,
	errorSelector,
	hasMoreSelector,
	totalSelector,
} from 'redux/searchReducers/searchCollectionsReducer';
import {
	doneSearching,
	resetSearchCollections,
	searchCollections,
} from 'redux/searchReducers/searchCollectionsReducer/actions';
import { CollectionsContainer } from './SearchCollections.styles';

const SearchCollections = () => {
	const collections = useSelector(searchCollectionSelector);
	const isLoading = useSelector(loadingSelector);
	const hasError = useSelector(errorSelector);
	const hasMore = useSelector(hasMoreSelector);
	const total = useSelector(totalSelector);
	const { query } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(searchCollections(query));
		setTimeout(() => {
			if (!total || total <= 15) {
				dispatch(doneSearching());
			}
		}, 3000);
		return dispatch(resetSearchCollections());
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{isLoading && <h1>Loading ....</h1>}
			{hasError && <h1>Error ....</h1>}
			<InfiniteScroll
				dataLength={collections.length}
				next={() => dispatch(searchCollections(query))}
				hasMore={hasMore}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						{total > 0 ? (
							<b>Yay! You have seen it all</b>
						) : (
							<h1>No Results Found ☹</h1>
						)}
					</p>
				}>
				<CollectionsContainer>
					{collections.map((collection) => (
						<CollectionsWall
							key={collection.id}
							collection={collection}
							height='280px'
						/>
					))}
				</CollectionsContainer>
			</InfiniteScroll>
		</>
	);
};

export default SearchCollections;
