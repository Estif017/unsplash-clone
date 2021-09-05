import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
	userPhotosSelector,
	loadingSelector,
	errorSelector,
	hasMoreSelector,
	pageSelector,
} from 'redux/userReducer/userPostReducer';
import {
	fetchUserPhotos,
	fetchNextPage,
	resetUserPage,
} from 'redux/userReducer/userPostReducer/action';
import { userProfileSelector } from 'redux/userReducer/userPageReducer';
import { closeHighlightPhotos } from 'redux/highlightReducer/highlightCollectionsReducer/action';
import { PhotosWall } from 'components';

const UserPost = (props) => {
	const photos = useSelector(userPhotosSelector);
	const isLoading = useSelector(loadingSelector);
	const hasError = useSelector(errorSelector);
	const hasMore = useSelector(hasMoreSelector);
	const page = useSelector(pageSelector);
	const userProfile = useSelector(userProfileSelector);
	const { userId } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(resetUserPage());
		dispatch(closeHighlightPhotos());
		dispatch(fetchUserPhotos(userId));
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		dispatch(fetchUserPhotos(userId));
		// eslint-disable-next-line
	}, [page]);
	return (
		<>
			{isLoading && <h1>Loading ....</h1>}
			{hasError && <h1>Error ....</h1>}
			<InfiniteScroll
				dataLength={photos.length}
				next={() => dispatch(fetchNextPage())}
				hasMore={hasMore}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						{userProfile.total_photos > 0 ? (
							<b>Yay! You have seen it all</b>
						) : (
							<h1>The User Have No Photos ☹</h1>
						)}
					</p>
				}>
				<PhotosWall photos={photos} {...props} />
			</InfiniteScroll>
		</>
	);
};

export default UserPost;
