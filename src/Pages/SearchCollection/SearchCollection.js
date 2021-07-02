import React, { Component } from 'react';
import axios from 'axios';
import {
	SearchCollectionContainer,
	ImageContainer,
	Image,
	PageButtonContainer,
	Button,
} from './SearchCollection.styled';

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

	componentDidUpdate(prevProps) {
		if (this.props.match.params.id !== prevProps.match.params.id) {
			this.searchCollection(this.props.match.params.id);
		}
	}
	componentDidMount() {
		this.searchCollection(this.props.match.params.id);
	}
	onNextHandler = () => {
		const nextPage = this.state.page + 1;
		this.setState({
			page: nextPage,
		});
		this.searchCollection(this.props.match.params.id);
	};
	onPrivieousHandler = () => {
		const nextPage = this.state.page - 1;
		this.setState({
			page: nextPage,
		});
		this.searchCollection(this.props.match.params.id);
	};
	render() {
		const { photos, isLoading, hasError } = this.state;
		return (
			<SearchCollectionContainer>
				{isLoading && !hasError && <h1>Loading......</h1>}
				{hasError && !isLoading && <h1>Error......</h1>}
				{photos[this.state.page - 1] && (
					<>
						{photos[this.state.page - 1].results.map((photo) => {
							return (
								<ImageContainer key={photo.id}>
									<Image src={photo.urls.regular} alt='collection-img' />
								</ImageContainer>
							);
						})}
						<PageButtonContainer>
							{this.state.page > 1 && (
								<Button onClick={this.onPrivieousHandler}>Previeous</Button>
							)}
							<Button onClick={this.onNextHandler}>Next</Button>
						</PageButtonContainer>
					</>
				)}
			</SearchCollectionContainer>
		);
	}
}

export default SearchCollection;
