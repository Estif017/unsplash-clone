import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as Likes } from 'assets/likes.svg';
import {
	ImageContainer,
	Image,
	ImageOverlay,
	StyledLink,
	Creator,
	More,
	P,
} from './PhotoCarousel.styles';

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
						<ImageOverlay>
							<StyledLink
								className='profile_pic'
								to={`/users/${photo.user.username}`}>
								<Image
									className='profile'
									src={photo.user.profile_image.large}
								/>
								<Creator>{photo.user.username}</Creator>
							</StyledLink>
							{this.props.addToPhotos && (
								<More onClick={() => this.props.addToPhotos(photo)}>
									<Likes className='like' />
								</More>
							)}

							<P>{photo.likes} Likes</P>
						</ImageOverlay>
					</ImageContainer>
				))}
			</Slider>
		);
	}
}
