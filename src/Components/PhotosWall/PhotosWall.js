import React from 'react';
import LazyLoad from 'react-lazyload';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ReactComponent as Likes } from 'assets/likes.svg';
import { ReactComponent as Liked } from 'assets/saved.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
	addToPhotos,
	removeFromSaved,
	showCarousel,
} from 'redux/appReducers/actions';
import { displaySelector, SavedPhotosSelector } from 'redux/appReducers';
import { DisplayCarousel } from 'components';
import {
	ImageContainer,
	PhotosContainer,
	Container,
} from './PhotosWall.styles';
import {
	UserLink,
	Image,
	Creator,
	SaveBtn,
	ImageOverlay,
	TotalLikes,
} from 'App.styles';

const PhotosWall = (props) => {
	const { photos } = props;
	const dispatch = useDispatch();
	const display = useSelector(displaySelector);
	const savedPhotos = useSelector(SavedPhotosSelector);
	return (
		<PhotosContainer>
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry>
					{photos.map((photo, mapIndex) => {
						const isFavored = !savedPhotos[photo.id];
						return (
							<ImageContainer background={photo.color} key={photo.id}>
								<LazyLoad>
									<Image src={photo.urls.regular} alt='collection-img' />
								</LazyLoad>
								<ImageOverlay hover bgColor='rgba(0, 0, 0, 0.3)'>
									<UserLink to={`/users/${photo.user.username}`}>
										<Image
											width='50px'
											height='50px'
											borderRadius='50%'
											src={photo.user.profile_image.large}
										/>
										<Creator>{photo.user.username}</Creator>
									</UserLink>
									<Container onClick={() => dispatch(showCarousel(mapIndex))} />
									<SaveBtn>
										{isFavored ? (
											<Likes onClick={() => dispatch(addToPhotos(photo))} />
										) : (
											<Liked onClick={() => dispatch(removeFromSaved(photo))} />
										)}
									</SaveBtn>
									<TotalLikes>{photo.likes} Likes</TotalLikes>
								</ImageOverlay>
							</ImageContainer>
						);
					})}
				</Masonry>
			</ResponsiveMasonry>
			{display && <DisplayCarousel {...props} />}
		</PhotosContainer>
	);
};
export default PhotosWall;
