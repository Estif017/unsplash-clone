import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as Likes } from 'assets/likes.svg';
import {
	ImageContainer,
	UserLink,
	Creator,
	SaveBtn,
	TotalLikes,
} from './PhotoCarousel.styles';
import { Image, ImageOverlay } from 'App.styles';

export default class PhotoCarousel extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			initialSlide: this.props.index,
		};
		return (
			<Slider {...settings}>
				{this.props.photos.map((photo) => (
					<ImageContainer key={photo.id}>
						<Image src={photo.urls.regular} />
						<ImageOverlay bgColor='rgba(0, 0, 0, 0.1)'>
							<UserLink to={`/users/${photo.user.username}`}>
								<Image
									width='50px'
									height='50px'
									borderRadius='50%'
									src={photo.user.profile_image.large}
								/>
								<Creator>{photo.user.username}</Creator>
							</UserLink>
							{this.props.addToPhotos && (
								<SaveBtn onClick={() => this.props.addToPhotos(photo)}>
									<Likes className='like' />
								</SaveBtn>
							)}
							<TotalLikes>{photo.likes} Likes</TotalLikes>
						</ImageOverlay>
					</ImageContainer>
				))}
			</Slider>
		);
	}
}
