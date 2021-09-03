import React from 'react';
import LazyLoad from 'react-lazyload';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ReactComponent as Likes } from 'assets/likes.svg';
import {
	ImageContainer,
	PhotosContainer,
	Container,
} from './PhotosWall.styles';
import { DisplayCarousel } from 'components';
import {
	UserLink,
	Image,
	Creator,
	SaveBtn,
	ImageOverlay,
	TotalLikes,
} from 'App.styles';
import { useDispatch } from 'react-redux';
import { addToPhotos, showCarousel } from 'redux/appReducers/actions';
import { useSelector } from 'react-redux';
import { displaySelector } from 'redux/appReducers';

const PhotosWall = (props) => {
	const { photos } = props;
	const dispatch = useDispatch();
	const display = useSelector(displaySelector);
	return (
		<PhotosContainer>
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry>
					{photos.map((photo, mapIndex) => {
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
									<SaveBtn onClick={() => dispatch(addToPhotos(photo))}>
										<Likes />
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
