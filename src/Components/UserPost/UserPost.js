import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PhotosWall } from 'components';

const UserPost = (props) => {
	const [photos, setPhotos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);
	const { userId } = useParams();
	const fetchNextPage = () => {
		const nextPage = page + 1;
		setPage(nextPage);
	};

	const fetchUserPhotos = async () => {
		try {
			setIsLoading(false);
			const { data } = await axios.get(
				`https://api.unsplash.com/users/${userId}/photos?page=${page}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=15`
			);
			setIsLoading(false);
			setHasError(false);
			setPhotos([...photos, ...data]);
			if (photos.length >= props.totalPhotos) {
				setHasMore(false);
			}
		} catch (error) {
			setIsLoading(false);
			setHasError(true);
			console.error(error);
		}
	};

	useEffect(() => {
		fetchUserPhotos();
		setTimeout(() => {
			if (!props.totalPhotos || props.totalPhotos <= 15) {
				setIsLoading(false);
				setHasError(false);
				setHasMore(false);
			}
		}, 3000);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		fetchUserPhotos();
		// eslint-disable-next-line
	}, [page]);

	return (
		<>
			{isLoading && <h1>Loading ....</h1>}
			{hasError && <h1>Error ....</h1>}
			<InfiniteScroll
				dataLength={photos.length}
				next={fetchNextPage}
				hasMore={hasMore}
				loader={<h4>Fetching More...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						{props.totalPhotos > 0 ? (
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
