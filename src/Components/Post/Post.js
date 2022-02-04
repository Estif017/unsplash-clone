import React from 'react';
import { useDispatch } from 'react-redux';
import LazyLoad from 'react-lazyload';
import {
	addToPhotos,
	removeFromSaved,
	showCarousel,
} from 'redux/appReducers/actions';
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
	More,
} from './Post.styles';
import { getPostCreatedDate } from 'utils/getPostCreatedDate';

const Post = ({ photo, mapIndex, isFavorite }) => {
	const dispatch = useDispatch();
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
						<CreatedAt>
							{getPostCreatedDate(
								photo.updated_at ? photo.updated_at : photo.created_at
							)}
						</CreatedAt>
					</StyledLink>
				</HeaderStatus>
				<More onClick={() => dispatch(showCarousel(mapIndex))}>
					<i className='fas fa-ellipsis-h'></i>
				</More>
			</PostHeader>
			<Description>{photo.alt_description}</Description>
			<ImageContainer>
				<LazyLoad height='500px'>
					<Image
						src={photo.urls.regular}
						alt={photo.alt_description}
						style={{ borderRadius: '15px' }}
						onClick={() => {
							dispatch(showCarousel(mapIndex));
						}}
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
		</PostContainer>
	);
};
export default Post;
