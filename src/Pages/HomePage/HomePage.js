import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Highlight, Post } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import {
	errorSelector,
	hasMoreSelector,
	loadingSelector,
	pageSelector,
	photosSelector,
} from 'redux/homePageReducer';
import { fetchNextPage, getPhoto } from 'redux/homePageReducer/actions';
import { HomePageContainer } from './HomePage.styles';

const HomePage = () => {
	const photos = useSelector(photosSelector);
	const isLoading = useSelector(loadingSelector);
	const hasError = useSelector(errorSelector);
	const page = useSelector(pageSelector);
	const hasMore = useSelector(hasMoreSelector);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPhoto());
		// eslint-disable-next-line
	}, [page]);

	useEffect(() => {
		dispatch(getPhoto());
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
				<HomePageContainer>
					{photos.map((photo, mapIndex) => (
						<Post
							key={photo.id + Math.random()}
							photo={photo}
							mapIndex={mapIndex}
						/>
					))}
				</HomePageContainer>
			</InfiniteScroll>
		</>
	);
};
export default HomePage;
