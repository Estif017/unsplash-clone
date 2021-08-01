import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CollectionsWall } from 'components';

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
		isLoading && <h1>Loading ....</h1>;
		hasError && <h1>Error ....</h1>;
		return (
			<InfiniteScroll
				dataLength={this.state.collections.length}
				next={this.fetchNextPage}
				hasMore={true}
				loader={<h4>Loading...</h4>}>
				<CollectionsWall
					collections={collections}
					addToCollections={this.props.addToCollections}
				/>
			</InfiniteScroll>
		);
	}
}

export default CollectionsPage;
