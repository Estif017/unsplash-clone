import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
	SearchCollectionsContainer,
	ImageContainer,
	Image,
	P,
} from './SearchCollections.styles';

export default class SearchCollections extends Component {
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
	searchCollections = async () => {
		try {
			this.setState({ isLoading: true, hasError: false });
			const { data } = await axios.get(
				`https://api.unsplash.com/search/collections?page=${this.state.page}&query=${this.props.searchKey}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
			);
			this.setState({
				collections: [...this.state.collections, ...data.results],
				isLoading: false,
				hasError: false,
			});
		} catch (error) {
			this.setState({ isLoading: false, hasError: true });
			console.error(error);
		}
	};
	componentDidUpdate(prevProps, prevState) {
		if (this.props.searchKey !== prevProps.searchKey) {
			this.setState({ collections: [] });
			this.searchCollections();
		} else if (this.state.page !== prevState.page) {
			this.searchCollections();
		}
	}

	componentDidMount() {
		this.searchCollections();
	}
	render() {
		const { collections, isLoading, hasError } = this.state;
		return (
			<InfiniteScroll
				dataLength={this.state.collections.length}
				next={this.fetchNextPage}
				hasMore={true}
				loader={<h4>Fetching More...</h4>}>
				<SearchCollectionsContainer>
					{isLoading && !hasError && <h1>Loading......</h1>}
					{hasError && !isLoading && <h1>Error......</h1>}
					{collections.length && (
						<>
							{collections.map((collection) => {
								return (
									<ImageContainer key={collection.id}>
										<Link to={`/search/collections/${collection.id}/photos`}>
											<Image
												src={collection.cover_photo.urls.regular}
												alt='collection-img'
											/>
										</Link>
										<P>{collection.total_photos}</P>
									</ImageContainer>
								);
							})}
						</>
					)}
				</SearchCollectionsContainer>
			</InfiniteScroll>
		);
	}
}
