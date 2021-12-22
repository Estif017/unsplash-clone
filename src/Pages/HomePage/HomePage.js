import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Highlight, Post } from 'Components';
import { useSelector, useDispatch } from 'react-redux';
import {
	errorSelector,
	hasMoreSelector,
	loadingSelector,
	pageSelector,
	photosSelector,
} from 'redux/homePageReducer';
import { fetchNextPage, getPhoto } from 'redux/homePageReducer/actions';
import { SavedPhotosSelector } from 'redux/appReducers';
import { closeHighlightPhotos } from 'redux/highlightReducer/highlightCollectionsReducer/action';
import { addToCollections } from 'redux/appReducers/actions';
import { sampleCollections } from 'utils/sampleCollections';

const HomePage = () => {
	const photos = useSelector(photosSelector);
	const isLoading = useSelector(loadingSelector);
	const hasError = useSelector(errorSelector);
	const page = useSelector(pageSelector);
	const hasMore = useSelector(hasMoreSelector);
	const savedPhotos = useSelector(SavedPhotosSelector);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPhoto());
		dispatch(closeHighlightPhotos());
		// eslint-disable-next-line
	}, [page]);

	useEffect(() => {
		dispatch(getPhoto());
		Object.entries(sampleCollections).map(([key, value]) =>
			dispatch(addToCollections(value))
		);

		// eslint-disable-next-line
	}, []);
	return (
		<>
			{isLoading && <h1>Loading ....</h1>}
			{hasError && <h1>Error ....</h1>}
			<Highlight />
			<InfiniteScroll
				dataLength={photos.length}
				next={() => dispatch(fetchNextPage())}
				hasMore={hasMore}
				loader={<h4>Loading...</h4>}>
				{photos.map((photo, mapIndex) => {
					const isFavorite = !savedPhotos[photo.id];
					return (
						<Post
							key={photo.id + Math.random()}
							photo={photo}
							photos={photos}
							mapIndex={mapIndex}
							isFavorite={isFavorite}
						/>
					);
				})}
			</InfiniteScroll>
		</>
	);
};
export default HomePage;
