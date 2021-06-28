import React, { Component } from 'react';
import axios from 'axios';
import {
	SearchCollectionContainer,
	ImageContainer,
	Image,
} from './SearchCollection-styled';

export class SearchCollection extends Component {
	state = {
		photos: [],
		isLoading: false,
		hasError: false,
		page: 1,
	};
	searchCollection = async (searchKey) => {
		try {
			this.setState({ isLoading: true, hasError: false });
			const { data } = await axios.get(
				`https://api.unsplash.com/search/photos?page=${this.state.page}&query=${searchKey}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=12`
			);
			this.setState({
				photos: [...this.state.photos, data],
				isLoading: false,
				hasError: false,
			});
		} catch (error) {
			this.setState({ isLoading: false, hasError: true });
			console.error(error);
		}
	};
	infiniteScroll = () => {
		// End of the document reached?

		if (
			Math.round(window.innerHeight + document.documentElement.scrollTop) ===
			document.documentElement.offsetHeight
		) {
			let newPage = this.state.page;
			newPage++;
			this.setState({
				page: newPage,
			});
			this.searchCollection(this.props.match.params.id);
		}
	};
	componentDidUpdate(prevProps) {
		if (this.props.match.params.id !== prevProps.match.params.id) {
			window.addEventListener('scroll', this.infiniteScroll, 1000);
			this.searchCollection(this.props.match.params.id);
		}
	}
	componentDidMount() {
		this.searchCollection(this.props.match.params.id);
		window.addEventListener('scroll', this.infiniteScroll, 1000);
	}
	render() {
		const { photos, isLoading, hasError } = this.state;
		return (
			<SearchCollectionContainer>
				{isLoading && !hasError && <h1>Loading......</h1>}
				{hasError && !isLoading && <h1>Error......</h1>}
				{photos[0] &&
					photos[0].results.map((photo) => {
						return (
							<ImageContainer key={photo.key}>
								<Image src={photo.urls.regular} alt='collection-img' />;
							</ImageContainer>
						);
					})}
			</SearchCollectionContainer>
		);
	}
}

export default SearchCollection;
