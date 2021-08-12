import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import PhotosWall from 'components/PhotosWall';

class SearchPhotos extends Component {
	state = {
		photos: [],
		isLoading: false,
		hasError: false,
		hasMore: true,
		page: 1,
		index: -1,
		total: 0,
	};
	searchPhotos = async () => {
		try {
			this.setState({ isLoading: true, hasError: false });
			const { data } = await axios.get(
				`https://api.unsplash.com/search/photos?page=${this.state.page}&query=${this.props.match.params.query}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=15`
			);
			this.setState({
				photos: [...this.state.photos, ...data.results],
				isLoading: false,
				hasError: false,
				page: this.state.page + 1,
				total: data.total,
			});
			if (this.state.photos.length >= this.state.total) {
				this.setState({ hasMore: false });
			}
		} catch (error) {
			this.setState({ isLoading: false, hasError: true });
			console.error(error);
		}
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.props.match.params.query !== prevProps.match.params.query) {
			this.setState({ photos: [], page: 1 });
			this.searchPhotos();
		}
	}
	componentDidMount() {
		this.searchPhotos();
		setTimeout(() => {
			if (!this.state.total || this.state.total <= 15) {
				this.setState({ isLoading: false, hasMore: false, hasError: false });
			}
		}, 3000);
	}

	render() {
		return (
			<InfiniteScroll
				dataLength={this.state.photos.length}
				next={this.searchPhotos}
				hasMore={this.state.hasMore}
				loader={<h4>Fetching More...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						{this.state.total > 0 ? (
							<b>Yay! You have seen it all</b>
						) : (
							<h1>No Results Found ☹</h1>
						)}
					</p>
				}>
				<PhotosWall {...this.state} {...this.props} />
			</InfiniteScroll>
		);
	}
}
export default withRouter(SearchPhotos);
