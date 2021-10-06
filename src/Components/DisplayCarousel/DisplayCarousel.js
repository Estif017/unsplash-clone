import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector, useDispatch } from 'react-redux';
import { indexSelector, SavedPhotosSelector } from 'redux/appReducers';
import { addToPhotos, removeFromSaved } from 'redux/appReducers/actions';
import { ReactComponent as Close } from 'assets/close.svg';
import { ReactComponent as DownloadIcon } from 'assets/download.svg';
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
	CreatedAt,
	DownloadBtn,
	NextArrowBtn,
	PrevArrowBtn,
} from './DisplayCarousel.styles';

const NextArrow = ({ onClick }) => <NextArrowBtn onClick={onClick} />;

const PrevArrow = ({ onClick }) => <PrevArrowBtn onClick={onClick} />;

const DisplayCarousel = (props) => {
	const index = useSelector(indexSelector);
	const savedPhotos = useSelector(SavedPhotosSelector);
	const sliderRef = useRef(null);
	useEffect(() => {
		const track =
			sliderRef.current.innerSlider.list.querySelector('.slick-track');
		const focusSlider = setTimeout(() => {
			const slide = track.querySelector('.slick-slide');
			slide.focus();
		}, 0);
		return () => clearTimeout(focusSlider);
	}, []);
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
				<Slider ref={sliderRef} {...settings}>
					{props.photos.map((photo) => {
						const isFavorite = !savedPhotos[photo.id];
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
											<CreatedAt>12 hour ago</CreatedAt>
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
											{isFavorite ? (
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
								<DownloadBtn
									href={photo.links.download}
									target='_blank'
									rel='noopener noreferrer'>
									<DownloadIcon />
								</DownloadBtn>
							</CarouselContainer>
						);
					})}
				</Slider>
			</View>
		</Cont>
	);
};
export default DisplayCarousel;
