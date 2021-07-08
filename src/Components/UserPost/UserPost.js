import React, { Component } from 'react';
import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';
import { ImageContainer, Image } from './UserPost.styles';

export default class UserPost extends Component {
	state = {
		photos: [],
		isLoading: false,
		hasError: false,
	};
	fetchUserPhotos = async (username) => {
		try {
			this.setState({ isLoading: true, hasError: false });
			const { data } = await axios.get(
				`https://api.unsplash.com/users/${username}/photos?client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=${this.props.user.total_photos}`
			);

			this.setState({
				photos: data,
				isLoading: false,
				hasError: false,
			});
		} catch (error) {
			this.setState({ isLoading: false, hasError: true });
			console.error(error);
		}
	};

	componentDidMount() {
		this.fetchUserPhotos(this.props.user.username);
	}

	render() {
		const { photos, isLoading, hasError } = this.state;
		return (
			<>
				{(isLoading && <h1>Loading ...</h1>) ||
					(hasError && <h1>Error Occurred</h1>) ||
					(photos &&
						photos.map((photo) => {
							return (
								// <InfiniteScroll
								// dataLength={this.props.user}
								// >
								<ImageContainer key={photo.id}>
									<Image src={photo.urls.regular} alt='collection-img' />
								</ImageContainer>
								// </InfiniteScroll>
							);
						}))}
			</>
		);
	}
}
