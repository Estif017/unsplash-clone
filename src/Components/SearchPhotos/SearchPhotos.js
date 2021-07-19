import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
	SearchPhotosContainer,
	ImageContainer,
	Image,
} from './SearchPhotos.styles';

class SearchPhotos extends Component {
	state = {
		photos: [],
		isLoading: false,
		hasError: false,
		page: 1,
	};
	searchPhotos = async () => {
		try {
			this.setState({ isLoading: true, hasError: false });
			const { data } = await axios.get(
				`https://api.unsplash.com/search/photos?page=${this.state.page}&query=${this.props.match.params.query}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
			);
			this.setState({
				photos: [...this.state.photos, ...data.results],
				isLoading: false,
				hasError: false,
				page: this.state.page + 1,
			});
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
	}

	render() {
		const { photos, isLoading, hasError } = this.state;
		return (
			<InfiniteScroll
				dataLength={this.state.photos.length}
				next={this.searchPhotos}
				hasMore={true}
				loader={<h4>Fetching More...</h4>}>
				<SearchPhotosContainer>
					{isLoading && !hasError && <h1>Loading......</h1>}
					{hasError && !isLoading && <h1>Error......</h1>}
					{photos.map((photo) => {
						return (
							<ImageContainer key={photo.id}>
								<Image src={photo.urls.regular} alt='collection-img' />
							</ImageContainer>
						);
					})}
				</SearchPhotosContainer>
			</InfiniteScroll>
		);
	}
}
export default withRouter(SearchPhotos);
