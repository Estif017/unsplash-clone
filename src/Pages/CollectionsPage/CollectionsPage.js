import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { CollectionsWall } from 'components';
import { CollectionsContainer } from './CollectionsPage.styles';

export class CollectionsPage extends Component {
	state = {
		collections: [],
		isLoading: false,
		hasError: false,
		page: 1,
	};

	fetchNextPage = () => {
		const nextPage = this.state.page + 1;
		this.setState({ page: nextPage });
	};

	getPhoto = async () => {
		try {
			this.setState({ isLoading: true });
			const { data } = await axios.get(
				`https://api.unsplash.com/collections/?page=${this.state.page}&client_id=${process.env.REACT_APP_ACCESS_KEY}&order_by=latest`
			);
			this.setState({
				collections: [...this.state.collections, ...data],
				isLoading: false,
				hasError: false,
			});
		} catch (error) {
			this.setState({ isLoading: false, hasError: true });
			console.error(error);
		}
	};
	componentDidUpdate(prevProps, prevState) {
		if (this.state.page !== prevState.page) {
			this.getPhoto();
		}
	}
	componentDidMount() {
		this.getPhoto();
	}
	render() {
		const { collections, isLoading, hasError } = this.state;
		return (
			<InfiniteScroll
				dataLength={this.state.collections.length}
				next={this.fetchNextPage}
				hasMore={true}
				loader={<h4>Loading...</h4>}>
				{isLoading && <h1>Loading ....</h1>}
				{hasError && <h1>Error ....</h1>}
				<CollectionsContainer>
					<ResponsiveMasonry
						columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
						<Masonry>
							{collections.map((collection) => (
								<CollectionsWall
									key={collection.id}
									collection={collection}
									addToCollections={this.props.addToCollections}
									className={['page-container']}
								/>
							))}
						</Masonry>
					</ResponsiveMasonry>
				</CollectionsContainer>
			</InfiniteScroll>
		);
	}
}

export default CollectionsPage;
