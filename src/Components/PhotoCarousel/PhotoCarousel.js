import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector, useDispatch } from 'react-redux';
import { indexSelector } from 'redux/appReducers';
import { addToPhotos } from 'redux/appReducers/actions';
import { ReactComponent as Likes } from 'assets/likes.svg';
import { ImageContainer } from './PhotoCarousel.styles';
import {
	Image,
	ImageOverlay,
	UserLink,
	Creator,
	SaveBtn,
	TotalLikes,
} from 'App.styles';

const PhotoCarousel = (props) => {
	const dispatch = useDispatch();
	const index = useSelector(indexSelector);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: index,
	};
	return (
		<Slider {...settings}>
			{props.photos.map((photo) => (
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
						<SaveBtn onClick={() => dispatch(addToPhotos(photo))}>
							<Likes />
						</SaveBtn>
						<TotalLikes>{photo.likes} Likes</TotalLikes>
					</ImageOverlay>
				</ImageContainer>
			))}
		</Slider>
	);
};

export default PhotoCarousel;
