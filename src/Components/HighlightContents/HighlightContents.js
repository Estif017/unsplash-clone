import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch } from 'react-redux';
import { addToPhotos } from 'redux/appReducers/actions';
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

const HighlightContents = ({ id }) => {
	const [photos, setPhotos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const page = 1;

	const dispatch = useDispatch();

	const getCollectionPhotos = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(
				`https://api.unsplash.com/collections/${id}/photos?page=${page}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
			);
			setIsLoading(false);
			setPhotos([...photos, ...data]);
			setHasError(false);
		} catch (error) {
			setIsLoading(false);
			setHasError(true);
			console.error(error);
		}
	};
	useEffect(() => {
		getCollectionPhotos();
		// eslint-disable-next-line
	}, []);

	const settings = {
		dots: true,
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
				{photos.map((photo) => (
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
		</>
	);
};
export default HighlightContents;
