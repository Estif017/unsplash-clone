import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { HomePageContainer } from './HomePage.styles';
import { Highlight, Post } from 'components';

const HomePage = (props) => {
	const [photos, setPhotos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [page, setPage] = useState(1);
	const hasMore = true;
	const index = -1;

	const fetchNextPage = () => {
		const nextPage = page + 1;
		setPage(nextPage);
	};

	const getPhoto = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(
				`https://api.unsplash.com/photos/?page=${page}&client_id=${process.env.REACT_APP_ACCESS_KEY}&order_by=latest`
			);
			setIsLoading(false);
			setPhotos([...photos, ...data]);
			setHasError(false);
		} catch (error) {
			setIsLoading(false);
			setHasError(true);
			console.error(error);
		}
	};

	useEffect(() => {
		getPhoto();
		// eslint-disable-next-line
	}, [page]);
	useEffect(() => {
		getPhoto();
		// eslint-disable-next-line
	}, []);
	return (
		<>
			{isLoading && <h1>Loading ....</h1>}
			{hasError && <h1>Error ....</h1>}
			<Highlight
				savedCollections={props.savedCollections}
				removeFromSavedCollection={props.removeFromSavedCollection}
				addToPhotos={props.addToPhotos}
			/>
			<InfiniteScroll
				dataLength={photos.length}
				next={fetchNextPage}
				hasMore={hasMore}
				loader={<h4>Loading...</h4>}>
				<HomePageContainer>
					{photos.map((photo, mapIndex) => (
						<Post
							key={photo.id}
							photos={photos}
							photo={photo}
							index={index}
							mapIndex={mapIndex}
							{...props}
						/>
					))}
				</HomePageContainer>
			</InfiniteScroll>
		</>
	);
};
export default HomePage;
