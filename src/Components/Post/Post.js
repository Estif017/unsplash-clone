import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LazyLoad from 'react-lazyload';
import {
	addToPhotos,
	removeFromSaved,
	showCarousel,
} from 'redux/appReducers/actions';
import { displaySelector } from 'redux/appReducers';
import { DisplayCarousel } from 'Components';
import { StyledLink, Button, IconContainer } from 'App.styles';
import {
	PostContainer,
	HeaderStatus,
	PostHeader,
	Container,
	ImageContainer,
	Image,
	UserName,
	CreatedAt,
	Description,
	TotalLikes,
} from './Post.styles';

const Post = ({ photo, mapIndex, isFavorite, photos }) => {
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
							borderRadius='15px'
						/>
					</StyledLink>
					<StyledLink to={`/users/${photo.user.username}`}>
						<UserName>{photo.user.name}</UserName>
						<CreatedAt>12 hour ago</CreatedAt>
					</StyledLink>
				</HeaderStatus>
			</PostHeader>
			<Description>{photo.alt_description}</Description>
			<ImageContainer>
				<LazyLoad height='500px'>
					<Image
						src={photo.urls.regular}
						alt={photo.alt_description}
						style={{ borderRadius: '15px' }}
						onClick={() => dispatch(showCarousel(mapIndex))}
					/>
				</LazyLoad>
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
				<TotalLikes>{photo.likes}</TotalLikes>
			</Container>
			{display && (
				<DisplayCarousel photos={photos} isFavorite={isFavorite} blur={0.1} />
			)}
		</PostContainer>
	);
};
export default Post;
