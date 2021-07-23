import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import { ReactComponent as Likes } from 'assets/likes.svg';
import {
	InfiniteScrollContainer,
	ImageContainer,
	Image,
	Container,
	More,
	P,
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
			<InfiniteScrollContainer
				dataLength={this.state.photos.length}
				next={this.searchPhotos}
				hasMore={true}
				loader={<h4>Fetching More...</h4>}>
				{isLoading && !hasError && <h1>Loading......</h1>}
				{hasError && !isLoading && <h1>Error......</h1>}
				{photos.map((photo) => {
					return (
						<ImageContainer key={photo.id}>
							<LazyLoad>
								<Image src={photo.urls.regular} alt='collection-img' />
							</LazyLoad>
							<Container>
								<More
									className='save-photo'
									onClick={() => {
										this.props.addToPhotos(photo);
									}}>
									<Likes className='like' />
								</More>
								<P>{photo.likes}</P>
							</Container>
						</ImageContainer>
					);
				})}
			</InfiniteScrollContainer>
		);
	}
}
export default withRouter(SearchPhotos);
