import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import {
	HighlightContainer,
	CollectionsContainer,
	Image,
	Container,
	View,
	Button,
} from './Highlight.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HighlightContents from 'components/HighlightContents';

export class Highlight extends Component {
	state = {
		collections: [],
		isLoading: false,
		hasError: false,
		page: 1,
		display: 'none',
		id: null,
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
	showCollectionPhotos = (id) => {
		this.setState({ display: 'block', id });
	};
	closeCollectionPhotos = () => {
		this.setState({ display: 'none' });
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
		const { collections, isLoading, hasError, display, id } = this.state;
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 1,
		};
		return (
			<HighlightContainer>
				<Container>
					{isLoading && <h1>Loading ....</h1>}
					{hasError && <h1>Error ....</h1>}
					<Slider {...settings}>
						{collections.map((collection) => (
							<CollectionsContainer key={collection.id}>
								<Image
									onClick={() => this.showCollectionPhotos(collection.id)}
									src={collection.cover_photo.urls.small}
									alt=''
								/>
							</CollectionsContainer>
						))}
					</Slider>
				</Container>
				{display === 'block' && (
					<View display={display}>
						<Button onClick={this.closeCollectionPhotos}>&times;</Button>
						<HighlightContents id={id} />
					</View>
				)}
			</HighlightContainer>
		);
	}
}

export default Highlight;
