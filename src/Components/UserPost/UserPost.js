import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import {
	InfiniteScrollContainer,
	ImageContainer,
	Image,
} from './UserPost.styles';

class UserPost extends Component {
	state = {
		photos: [],
		isLoading: false,
		hasMore: true,
		page: 1,
	};
	fetchNextPage = () => {
		const nextPage = this.state.page + 1;
		this.setState({ page: nextPage });
	};
	fetchUserPhotos = async () => {
		try {
			this.setState({ isLoading: true, hasError: false });
			const { data } = await axios.get(
				`https://api.unsplash.com/users/${this.props.match.params.userId}/photos?page=${this.state.page}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
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
		);
	}
}
export default withRouter(UserPost);