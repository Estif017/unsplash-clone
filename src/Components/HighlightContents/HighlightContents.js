import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { idSelector } from 'redux/highlightReducer/highlightCollectionsReducer';
import {
	photosSelector,
	loadingSelector,
	errorSelector,
} from 'redux/highlightReducer/highlightPhotosReducer';
import { getHighlightPhotos } from 'redux/highlightReducer/highlightPhotosReducer/action';
import { addToPhotos, removeFromSaved } from 'redux/appReducers/actions';
import { ImageContainer } from './HighlightContents.styles';
import {
	Image,
	ImageOverlay,
	UserLink,
	Creator,
	SaveBtn,
	TotalLikes,
	IconContainer,
} from 'App.styles';
import { SavedPhotosSelector } from 'redux/appReducers';

const HighlightContents = () => {
	const photos = useSelector(photosSelector);
	const isLoading = useSelector(loadingSelector);
	const hasError = useSelector(errorSelector);
	const id = useSelector(idSelector);
	const savedPhotos = useSelector(SavedPhotosSelector);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getHighlightPhotos(id));
		// eslint-disable-next-line
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<>
			{isLoading && <h1>Loading ...</h1>}
			{hasError && <h1>Error Occurred</h1>}
			<Slider {...settings}>
				{photos.map((photo) => {
					const isFavourite = !savedPhotos[photo.id];
					return (
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
								<SaveBtn>
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
								</SaveBtn>
								<TotalLikes>{photo.likes} Likes</TotalLikes>
							</ImageOverlay>
						</ImageContainer>
					);
				})}
			</Slider>
		</>
	);
};
export default HighlightContents;
