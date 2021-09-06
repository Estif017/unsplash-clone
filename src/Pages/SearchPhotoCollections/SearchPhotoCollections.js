import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
	getPhotoCollections,
	fetchNextPage,
	noNextPage,
} from 'redux/photoCollectionsReducer/actions';
import {
	photoSelector,
	loadingSelector,
	errorSelector,
	pageSelector,
	hasMoreSelector,
	totalPhotosSelector,
} from 'redux/photoCollectionsReducer';
import { PhotosWall } from 'components';
import { Container } from './SearchPhotoCollections.styles';

const SearchPhotoCollections = (props) => {
	const photos = useSelector(photoSelector);
	const isLoading = useSelector(loadingSelector);
	const hasError = useSelector(errorSelector);
	const hasMore = useSelector(hasMoreSelector);
	const page = useSelector(pageSelector);
	const total = useSelector(totalPhotosSelector);
	const dispatch = useDispatch();
	const { collectionId } = useParams();

	useEffect(() => {
		dispatch(getPhotoCollections(collectionId));
		setTimeout(() => {
			if (total <= 15) {
				dispatch(noNextPage());
			}
		}, 3000);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		dispatch(getPhotoCollections(collectionId));
		// eslint-disable-next-line
	}, [page]);

	return (
		<>
			{isLoading && <h1>Loading ....</h1>}
			{hasError && <h1>Error ....</h1>}
			<Container>
				<InfiniteScroll
					dataLength={photos.length}
					next={() => dispatch(fetchNextPage())}
					hasMore={hasMore}
					loader={<h4>Fetching More...</h4>}
					endMessage={
						<p style={{ textAlign: 'center' }}>
							<b>Yay! You have seen it all</b>
						</p>
					}>
					<PhotosWall photos={photos} {...props} />
				</InfiniteScroll>
			</Container>
		</>
	);
};

export default SearchPhotoCollections;
