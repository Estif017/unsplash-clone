import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import PhotosWall from 'components/PhotosWall';

const SearchPhotos = (props) => {
	const [photos, setPhotos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const { query } = useParams();
	const prvQueryRef = useRef();
	const prevQuery = prvQueryRef.current;

	const searchPhotos = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(
				`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=15`
			);
			setPhotos([...photos, ...data.results]);
			setPage(page + 1);
			setTotal(data.total);
			setIsLoading(false);
			setHasError(false);
			setHasMore(true);
		} catch (error) {
			setIsLoading(false);
			setHasError(true);
			console.error(error);
		}
	};
	useEffect(() => {
		searchPhotos();
		prvQueryRef.current = query;
		setTimeout(() => {
			if (total && total <= 15) {
				setHasMore(false);
				console.log({ total, hasMore });
			}
		}, 5000);
		if (prevQuery) {
			setPhotos(photos.splice(0, photos.length));
			setPage(1);
			setIsLoading(true);
		}
		// eslint-disable-next-line
	}, [query]);
	return (
		<>
			{isLoading && <h1>Loading...</h1>}
			{hasError && <h1>Error...</h1>}
			<InfiniteScroll
				dataLength={photos.length}
				next={searchPhotos}
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
				<PhotosWall
					photos={photos}
					isLoading={isLoading}
					hasError={hasError}
					{...props}
				/>
			</InfiniteScroll>
		</>
	);
};

export default SearchPhotos;
