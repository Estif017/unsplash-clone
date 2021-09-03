import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CollectionsContainer } from './SearchCollections.styles';
import CollectionsWall from 'components/CollectionsWall';
import { useParams } from 'react-router-dom';

const SearchCollections = () => {
	const [collections, setCollections] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const { query } = useParams();

	const searchCollections = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(
				`https://api.unsplash.com/search/collections?page=${page}&query=${query}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=15`
			);
			setCollections([...collections, ...data.results]);
			setPage(page + 1);
			setTotal(data.total);
			setIsLoading(false);
			setHasError(false);
		} catch (error) {
			setIsLoading(false);
			setHasError(true);
			setHasMore(false);
			console.error(error);
		}
	};

	useEffect(() => {
		searchCollections();
		setTimeout(() => {
			if (!total || total <= 15) {
				setIsLoading(false);
				setHasMore(false);
				setHasError(false);
			}
		}, 3000);
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{isLoading && <h1>Loading ....</h1>}
			{hasError && <h1>Error ....</h1>}
			<InfiniteScroll
				dataLength={collections.length}
				next={searchCollections}
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
