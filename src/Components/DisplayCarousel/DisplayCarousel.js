import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector, useDispatch } from 'react-redux';
import { indexSelector, SavedPhotosSelector } from 'redux/appReducers';
import { addToPhotos, removeFromSaved } from 'redux/appReducers/actions';
import { ReactComponent as Close } from 'assets/close.svg';
import { Image, Button, IconContainer, StyledLink, H4, H1 } from 'App.styles';
import { closeCarousel } from 'redux/appReducers/actions';
import {
	View,
	CarouselContainer,
	ImageContainer,
	CarouselHeader,
	HeaderStatus,
	Container,
	Cont,
	NextArrowBtn,
	PrevArrowBtn,
} from './DisplayCarousel.styles';

const NextArrow = ({ className, style, onClick }) => (
	<NextArrowBtn className={className} style={{ ...style }} onClick={onClick} />
);

const PrevArrow = ({ className, style, onClick }) => (
	<PrevArrowBtn className={className} style={{ ...style }} onClick={onClick} />
);

const DisplayCarousel = (props) => {
	const index = useSelector(indexSelector);
	const savedPhotos = useSelector(SavedPhotosSelector);
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: index,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};
	const dispatch = useDispatch();
	return (
		<Cont blur={props.blur}>
			<View>
				<Slider {...settings}>
					{props.photos.map((photo) => {
						const isFavourite = !savedPhotos[photo.id];
						return (
							<CarouselContainer key={photo.id}>
								<CarouselHeader>
									<HeaderStatus>
										<StyledLink to={`/users/${photo.user.username}`}>
											<Image
												src={photo.user.profile_image.medium}
												alt='user-profile'
												borderRadius='15px'
											/>
										</StyledLink>
										<StyledLink to={`/users/${photo.user.username}`}>
											<H4>{photo.user.name}</H4>
										</StyledLink>
									</HeaderStatus>
									<Close
										style={{ cursor: 'pointer' }}
										onClick={() => dispatch(closeCarousel())}
									/>
								</CarouselHeader>
								<ImageContainer>
									<Image src={photo.urls.regular} borderRadius='15px' />
								</ImageContainer>
								<Container>
									<Button>
										<IconContainer>
											{isFavourite ? (
												<i
													className='far fa-heart'
													onClick={() => dispatch(addToPhotos(photo))}
												/>
											) : (
												<i
													className='fas fa-heart'
													onClick={() => dispatch(removeFromSaved(photo))}
												/>
											)}
										</IconContainer>
									</Button>
									<H1>{photo.likes}</H1>
								</Container>
							</CarouselContainer>
						);
					})}
				</Slider>
			</View>
		</Cont>
	);
};
export default DisplayCarousel;
