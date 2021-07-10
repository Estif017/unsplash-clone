import React, { Component } from 'react';
import axios from 'axios';
import {
	InfiniteScrollContainer,
	ImageContainer,
	Image,
} from './UserPost.styles';

export default class UserPost extends Component {
	state = {
		photos: [],
		isLoading: false,
		hasError: false,
		hasMore: true,
		page: 1,
	};
	fetchNextPage = () => {
		if (this.state.photos.length >= this.props.user.total_photos) {
			this.setState({ hasMore: false });
			return;
		}
		const nextPage = this.state.page + 1;
		this.setState({ page: nextPage });
	};
	fetchUserPhotos = async () => {
		try {
			this.setState({ isLoading: true, hasError: false });
			const { data } = await axios.get(
				`https://api.unsplash.com/users/${this.props.user.username}/photos?page=${this.state.page}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
			);

			this.setState({
				photos: [...this.state.photos, ...data],
				isLoading: false,
				hasError: false,
			});
		} catch (error) {
			this.setState({ isLoading: false, hasError: true });
			console.error(error);
		}
	};

	componentDidMount() {
		this.fetchUserPhotos();
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.page !== prevState.page) {
			this.fetchUserPhotos();
		}
	}

	render() {
		const { photos, isLoading, hasError, hasMore } = this.state;
		isLoading && <h1>Loading ...</h1>;
		hasError && <h1>Error Occurred</h1>;
		return (
			<>
				{photos.length && (
					<InfiniteScrollContainer
						dataLength={this.state.photos.length}
						next={this.fetchNextPage}
						hasMore={hasMore}
						loader={<h4>Fetching More...</h4>}>
						{photos.map((photo) => {
							return (
								<ImageContainer key={photo.id}>
									<Image src={photo.urls.regular} alt='collection-img' />
								</ImageContainer>
							);
						})}
					</InfiniteScrollContainer>
				)}
			</>
		);
	}
}
