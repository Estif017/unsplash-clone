import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PhotosWall } from 'components';
import { Container } from './SearchPhotoCollections.styles';
import { useParams } from 'react-router-dom';

const SearchPhotoCollections = (props) => {
	const [photos, setPhotos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const { collectionId } = useParams();

	const fetchNextPage = () => {
		const nextPage = page + 1;
		setPage(nextPage);
	};
	const getCollectionPhotos = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(
				`https://api.unsplash.com/collections/${collectionId}/photos?page=${page}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=15`
			);
			setIsLoading(false);
			setHasError(false);
			setPhotos([...photos, ...data]);
			setTotal(data.length);
		} catch (error) {
			setIsLoading(false);
			setHasError(true);
			console.error(error);
		}
	};

	useEffect(() => {
		getCollectionPhotos();
		setTimeout(() => {
			if (total <= 15) {
				setHasMore(false);
			}
		}, 3000);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		getCollectionPhotos();
		// eslint-disable-next-line
	}, [page]);

	return (
		<Container>
			<InfiniteScroll
				dataLength={photos.length}
				next={fetchNextPage}
				hasMore={hasMore}
				loader={<h4>Fetching More...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}>
				<PhotosWall
					photos={photos}
					isLoading={isLoading}
					hasMore={hasMore}
					hasError={hasError}
					{...props}
				/>
			</InfiniteScroll>
		</Container>
	);
};

export default SearchPhotoCollections;
