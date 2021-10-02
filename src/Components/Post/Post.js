import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addToPhotos,
	removeFromSaved,
	showCarousel,
} from 'redux/appReducers/actions';
import { displaySelector } from 'redux/appReducers';
import { DisplayCarousel } from 'Components';
import { StyledLink, H4, P, Button, H1, IconContainer } from 'App.styles';
import {
	PostContainer,
	HeaderStatus,
	PostHeader,
	Container,
	ImageContainer,
	Image,
} from './Post.styles';

const Post = ({ photo, mapIndex, isFavourite, photos }) => {
	const dispatch = useDispatch();
	const display = useSelector(displaySelector);

	return (
		<PostContainer>
			<PostHeader>
				<HeaderStatus>
					<StyledLink to={`/users/${photo.user.username}`}>
						<Image
							src={photo.user.profile_image.medium}
							alt='user-profile'
							borderRadius='50%'
						/>
					</StyledLink>
					<StyledLink to={`/users/${photo.user.username}`}>
						<H4>{photo.user.name}</H4>
					</StyledLink>
				</HeaderStatus>
			</PostHeader>
			<P>{photo.alt_description}</P>
			<ImageContainer>
				<Image
					src={photo.urls.regular}
					alt={photo.alt_description}
					style={{ borderRadius: '15px' }}
					onClick={() => dispatch(showCarousel(mapIndex))}
				/>
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
			{display && (
				<DisplayCarousel photos={photos} isFavourite={isFavourite} blur={0.1} />
			)}
		</PostContainer>
	);
};
export default Post;
