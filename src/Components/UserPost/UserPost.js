import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { PhotosWall } from 'components';
import InfiniteScroll from 'react-infinite-scroll-component';

class UserPost extends Component {
	state = {
		photos: [],
		isLoading: false,
		hasMore: true,
		page: 1,
		liked: false,
		index: -1,
	};
	fetchNextPage = () => {
		const nextPage = this.state.page + 1;
		this.setState({ page: nextPage });
	};
	fetchUserPhotos = async () => {
		try {
			this.setState({ isLoading: true, hasError: false });
			const { data } = await axios.get(
				`https://api.unsplash.com/users/${this.props.match.params.userId}/photos?page=${this.state.page}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=15`
			);

			this.setState({
				photos: [...this.state.photos, ...data],
				isLoading: false,
				hasError: false,
			});
			if (this.state.photos.length >= this.props.totalPhotos) {
				this.setState({ hasMore: false });
			}
		} catch (error) {
			this.setState({ isLoading: false, hasError: true });
			console.error(error);
		}
	};

	componentDidMount() {
		this.fetchUserPhotos();
		setTimeout(() => {
			if (!this.props.totalPhotos || this.props.totalPhotos <= 15) {
				this.setState({ isLoading: false, hasMore: false, hasError: false });
			}
		}, 3000);
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.page !== prevState.page) {
			this.fetchUserPhotos();
		}
	}

	render() {
		const { isLoading, hasError, hasMore, photos } = this.state;
		const { totalPhotos } = this.props;
		return (
			<>
				{isLoading && <h1>Loading ....</h1>}
				{hasError && <h1>Error ....</h1>}
				<InfiniteScroll
					dataLength={photos.length}
					next={this.fetchNextPage}
					hasMore={hasMore}
					loader={<h4>Fetching More...</h4>}
					endMessage={
						<p style={{ textAlign: 'center' }}>
							{totalPhotos > 0 ? (
								<b>Yay! You have seen it all</b>
							) : (
								<h1>The User Have No Photos ☹</h1>
							)}
						</p>
					}>
					<PhotosWall {...this.state} {...this.props} />
				</InfiniteScroll>
			</>
		);
	}
}
export default withRouter(UserPost);
