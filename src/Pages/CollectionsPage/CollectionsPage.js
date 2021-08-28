import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { CollectionsWall } from 'components';
import { CollectionsContainer } from './CollectionsPage.styles';

const CollectionsPage = (props) => {
	const [collections, setCollections] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [page, setPage] = useState(1);
	const hasMore = true;

	const fetchNextPage = () => {
		const nextPage = page + 1;
		setPage(nextPage);
	};

	const getCollections = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(
				`https://api.unsplash.com/collections/?page=${page}&client_id=${process.env.REACT_APP_ACCESS_KEY}&order_by=latest&per_page=15`
			);
			setIsLoading(false);
			setCollections([...collections, ...data]);
			setHasError(false);
		} catch (error) {
			setIsLoading(false);
			setHasError(true);
			console.error(error);
		}
	};

	useEffect(() => {
		getCollections();
		// eslint-disable-next-line
	}, [page]);

	useEffect(() => {
		getCollections();
		// eslint-disable-next-line
	}, []);
	return (
		<InfiniteScroll
			dataLength={collections.length}
			next={fetchNextPage}
			hasMore={hasMore}
			loader={<h4>Loading...</h4>}>
			{isLoading && <h1>Loading ....</h1>}
			{hasError && <h1>Error ....</h1>}
			<CollectionsContainer>
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
					<Masonry>
						{collections.map((collection) => (
							<CollectionsWall
								key={collection.id}
								collection={collection}
								addToCollections={props.addToCollections}
								margin='10px'
							/>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</CollectionsContainer>
		</InfiniteScroll>
	);
};

export default CollectionsPage;
