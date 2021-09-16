import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
	searchPhotosSelector,
	loadingSelector,
	errorSelector,
	hasMoreSelector,
	totalSelector,
} from 'redux/searchReducers/searchPhotosReducer';
import {
	searchPhotos,
	doneSearching,
	resetSearchPhotos,
} from 'redux/searchReducers/searchPhotosReducer/action';
import PhotosWall from 'Components/PhotosWall';

const SearchPhotos = (props) => {
	const photos = useSelector(searchPhotosSelector);
	const isLoading = useSelector(loadingSelector);
	const hasError = useSelector(errorSelector);
	const hasMore = useSelector(hasMoreSelector);
	const total = useSelector(totalSelector);
	const { query } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(searchPhotos(query));
		setTimeout(() => {
			if (total && total <= 15) {
				dispatch(doneSearching());
			}
		}, 5000);
		return dispatch(resetSearchPhotos());
		// eslint-disable-next-line
	}, [query]);
	return (
		<>
			{isLoading && <h1>Loading...</h1>}
			{hasError && <h1>Error...</h1>}
			<InfiniteScroll
				dataLength={photos.length}
				next={() => dispatch(searchPhotos(query))}
				hasMore={hasMore}
				loader={<h4>Fetching More...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						{total > 0 ? (
							<b>Yay! You have seen it all</b>
						) : (
							<h1>No Results Found ☹</h1>
						)}
					</p>
				}>
				<PhotosWall photos={photos} {...props} />
			</InfiniteScroll>
		</>
	);
};

export default SearchPhotos;
