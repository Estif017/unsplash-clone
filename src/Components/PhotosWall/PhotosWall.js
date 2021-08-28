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

const PhotosWall = (props) => {
	const { photos, isLoading, hasError, display, showCarousel } = props;
	return (
		<PhotosContainer>
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry>
					{isLoading && !hasError && <h1>Loading......</h1>}
					{hasError && !isLoading && <h1>Error......</h1>}
					{photos.map((photo, index) => {
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
									<Container onClick={() => showCarousel(index)} />
									<SaveBtn onClick={() => props.addToPhotos(photo)}>
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
