import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PhotosWall } from 'components';

export default class SearchPhotoCollections extends Component {
	state = {
		photos: [],
		isLoading: false,
		hasError: false,
		hasMore: true,
		page: 1,
	};
	fetchNextPage = () => {
		const nextPage = this.state.page + 1;
		this.setState({ page: nextPage });
	};
	getCollectionPhotos = async () => {
		try {
			this.setState({ isLoading: true, hasError: false });
			const { data } = await axios.get(
				`https://api.unsplash.com/collections/${this.props.match.params.collectionId}/photos?page=${this.state.page}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
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
	showCarousel = (photo) => {
		let index = this.state.photos.findIndex((i) => i.id === photo.id);
		this.setState({
			carousel: [this.state.photos[index], ...this.state.photos],
			display: 'block',
		});
	};

	closeCarousel = () => {
		this.setState({ display: 'none' });
	};
	componentDidMount() {
		this.getCollectionPhotos();
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.page !== prevState.page) {
			this.getCollectionPhotos();
		}
	}
	render() {
		return (
			<InfiniteScroll
				dataLength={this.state.photos.length}
				next={this.fetchNextPage}
				hasMore={this.state.hasMore}
				loader={<h4>Fetching More...</h4>}>
				<PhotosWall
					{...this.state}
					addToPhotos={this.props.addToPhotos}
					showCarousel={this.showCarousel}
					closeCarousel={this.closeCarousel}
				/>
			</InfiniteScroll>
		);
	}
}
