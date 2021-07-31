import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import {
	HighlightContainer,
	CollectionsContainer,
	Image,
	Container,
	View,
} from './Highlight.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export class Highlight extends Component {
	state = {
		collections: [],
		isLoading: false,
		hasError: false,
		page: 1,
		display: 'none',
	};

	fetchNextPage = () => {
		const nextPage = this.state.page + 1;
		this.setState({ page: nextPage });
	};

	getPhoto = async () => {
		try {
			this.setState({ isLoading: true });
			const { data } = await axios.get(
				`https://api.unsplash.com/collections/?page=${this.state.page}&client_id=${process.env.REACT_APP_ACCESS_KEY}&order_by=latest`
			);
			this.setState({
				collections: [...this.state.collections, ...data],
				isLoading: false,
			});
		} catch (error) {
			this.setState({ isLoading: false, hasError: true });
			console.error(error);
		}
	};
	showCollectionPhotos = () => {
		this.setState({ display: 'block' });
	};
	componentDidUpdate(prevProps, prevState) {
		if (this.state.page !== prevState.page) {
			this.getPhoto();
		}
	}
	componentDidMount() {
		this.getPhoto();
	}
	render() {
		const { collections, isLoading, hasError } = this.state;
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
		};
		isLoading && <h1>Loading ....</h1>;
		hasError && <h1>Error ....</h1>;
		return (
			<HighlightContainer>
				<Container>
					<Slider {...settings}>
						{collections.map((collection) => (
							<CollectionsContainer key={collection.id}>
								<Image
									onClick={this.showCollectionPhotos}
									src={collection.cover_photo.urls.small}
									alt=''
								/>
							</CollectionsContainer>
						))}
					</Slider>
				</Container>
				<View display={this.state.display}></View>
			</HighlightContainer>
		);
	}
}

export default Highlight;
