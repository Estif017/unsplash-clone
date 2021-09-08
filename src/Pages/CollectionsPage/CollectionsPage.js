import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import {
	getCollections,
	fetchNextPage,
} from 'redux/collectionPageReducers/action';
import {
	collectionsSelector,
	loadingSelector,
	errorSelector,
	pageSelector,
	hasMoreSelector,
} from 'redux/collectionPageReducers';
import { CollectionsWall } from 'components';
import { CollectionsContainer } from './CollectionsPage.styles';
import { savedCollectionsSelector } from 'redux/appReducers';

const CollectionsPage = (props) => {
	const collections = useSelector(collectionsSelector);
	const isLoading = useSelector(loadingSelector);
	const hasError = useSelector(errorSelector);
	const hasMore = useSelector(hasMoreSelector);
	const page = useSelector(pageSelector);
	const savedCollections = useSelector(savedCollectionsSelector);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCollections());
		// eslint-disable-next-line
	}, [page]);

	useEffect(() => {
		dispatch(getCollections());
		// eslint-disable-next-line
	}, []);
	return (
		<InfiniteScroll
			dataLength={collections.length}
			next={() => dispatch(fetchNextPage())}
			hasMore={hasMore}
			loader={<h4>Loading...</h4>}>
			{isLoading && <h1>Loading ....</h1>}
			{hasError && <h1>Error ....</h1>}
			<CollectionsContainer>
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
					<Masonry>
						{collections.map((collection) => {
							const isFavored = !savedCollections[collection.id];
							return (
								<CollectionsWall
									key={collection.id}
									collection={collection}
									isFavored={isFavored}
									margin='10px'
								/>
							);
						})}
					</Masonry>
				</ResponsiveMasonry>
			</CollectionsContainer>
		</InfiniteScroll>
	);
};

export default CollectionsPage;
