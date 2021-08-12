import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CollectionsContainer } from './SearchCollections.styles';
import CollectionsWall from 'components/CollectionsWall';

class SearchCollections extends Component {
	state = {
		collections: [],
		isLoading: false,
		hasError: false,
		hasMore: true,
		total: 0,
		page: 1,
	};
	fetchNextPage = () => {
		if (
			this.state.collections.length >= this.state.total &&
			this.state.total > 0
		) {
			this.setState({ hasMore: false });
			return;
		}
		const nextPage = this.state.page + 1;
		this.setState({ page: nextPage });
	};
	searchCollections = async () => {
		try {
			this.setState({ isLoading: true, hasError: false });
			const { data } = await axios.get(
				`https://api.unsplash.com/search/collections?page=${this.state.page}&query=${this.props.match.params.query}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
			);
			this.setState({
				collections: [...this.state.collections, ...data.results],
				isLoading: false,
				hasError: false,
				hasMore: true,
				total: data.total,
			});
		} catch (error) {
			this.setState({ isLoading: false, hasError: true, hasMore: false });
			console.error(error);
		}
	};
	componentDidUpdate(prevProps, prevState) {
		if (this.props.match.params.query !== prevProps.match.params.query) {
			this.setState({ collections: [] });
			this.searchCollections();
		} else if (this.state.page !== prevState.page) {
			this.searchCollections();
		}
	}

	componentDidMount() {
		this.searchCollections();
		setTimeout(() => {
			if (!this.state.total) {
				this.setState({ isLoading: false, hasMore: false, hasError: false });
				console.log('No results');
				return;
			}
		}, 3000);
	}
	render() {
		const { collections, isLoading, hasError, hasMore, total } = this.state;
		return (
			<>
				{isLoading && <h1>Loading ....</h1>}
				{hasError && <h1>Error ....</h1>}
				{!isLoading && !hasMore && !hasError && !total && (
					<h1>No Results Found ☹</h1>
				)}
				<InfiniteScroll
					dataLength={this.state.collections.length}
					next={this.fetchNextPage}
					hasMore={hasMore}
					loader={<h4>Loading...</h4>}
					endMessage={
						<p style={{ textAlign: 'center' }}>
							<b>Yay! You have seen it all</b>
						</p>
					}>
					<CollectionsContainer>
						{collections.map((collection) => (
							<CollectionsWall
								key={collection.id}
								collection={collection}
								addToCollections={this.props.addToCollections}
								className={['search-container', 'height']}
							/>
						))}
					</CollectionsContainer>
				</InfiniteScroll>
			</>
		);
	}
}

export default withRouter(SearchCollections);
