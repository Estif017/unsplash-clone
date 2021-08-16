import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as Likes } from 'assets/likes.svg';
import { ImageContainer } from './HighlightContents.styles';
import {
	Image,
	ImageOverlay,
	UserLink,
	Creator,
	SaveBtn,
	TotalLikes,
} from 'App.styles';

export default class HighlightContents extends Component {
	state = {
		photos: [],
		isLoading: false,
		hasError: false,
		page: 1,
	};
	getCollectionPhotos = async () => {
		try {
			this.setState({ isLoading: true, hasError: false });
			const { data } = await axios.get(
				`https://api.unsplash.com/collections/${this.props.id}/photos?page=${this.state.page}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
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
		this.getCollectionPhotos();
	}
	render() {
		const { photos, isLoading, hasError } = this.state;
		isLoading && <h1>Loading ...</h1>;
		hasError && <h1>Error Occurred</h1>;
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		return (
			<Slider {...settings}>
				{photos.map((photo) => (
					<ImageContainer key={photo.id}>
						<Image src={photo.urls.regular} />
						<ImageOverlay bgColor='rgba(0, 0, 0, 0.1)'>
							<UserLink
								className='profile_pic'
								to={`/users/${photo.user.username}`}>
								<Image
									width='50px'
									height='50px'
									borderRadius='50%'
									src={photo.user.profile_image.large}
								/>
								<Creator>{photo.user.username}</Creator>
							</UserLink>
							<SaveBtn onClick={() => this.props.addToPhotos(photo)}>
								<Likes className='like' />
							</SaveBtn>
							<TotalLikes>{photo.likes} Likes</TotalLikes>
						</ImageOverlay>
					</ImageContainer>
				))}
			</Slider>
		);
	}
}
