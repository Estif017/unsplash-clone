import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
	SearchPhotosContainer,
	ImageContainer,
	Image,
} from './SearchPhotos.styles';

export default class SearchPhotos extends Component {
	state = {
		photos: [],
		isLoading: false,
		hasError: false,
		page: 1,
	};
	fetchNextPage = () => {
		const nextPage = this.state.page + 1;
		this.setState({ page: nextPage });
	};
	searchPhotos = async () => {
		try {
			this.setState({ isLoading: true, hasError: false });
			const { data } = await axios.get(
				`https://api.unsplash.com/search/photos?page=${this.state.page}&query=${this.props.searchKey}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
			);
			this.setState({
				photos: [...this.state.photos, ...data.results],
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
			window.location.reload(true);
			this.searchPhotos();
		} else if (this.state.page !== prevState.page) {
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
				next={this.fetchNextPage}
				hasMore={true}
				loader={<h4>Fetching More...</h4>}>
				<SearchPhotosContainer>
					{isLoading && !hasError && <h1>Loading......</h1>}
					{hasError && !isLoading && <h1>Error......</h1>}
					{photos.length && (
						<>
							{photos.map((photo) => {
								return (
									<ImageContainer key={photo.id}>
										<Image src={photo.urls.regular} alt='collection-img' />
									</ImageContainer>
								);
							})}
						</>
					)}
				</SearchPhotosContainer>
			</InfiniteScroll>
		);
	}
}
