import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import CollectionsWall from 'components/CollectionsWall';

class SearchCollections extends Component {
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
				`https://api.unsplash.com/search/collections?page=${this.state.page}&query=${this.props.match.params.query}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
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
		if (this.props.match.params.query !== prevProps.match.params.query) {
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

export default withRouter(SearchCollections);
