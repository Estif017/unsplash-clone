import React from 'react';
import { ReactComponent as Likes } from 'assets/likes.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToPhotos, showCarousel } from 'redux/appReducers/actions';
import { displaySelector } from 'redux/appReducers';
import { DisplayCarousel } from 'components';
import { StyledLink, Image, H4, P, Button, H1 } from 'App.styles';
import {
	PostContainer,
	HeaderStatus,
	PostHeader,
	Container,
	LazyLoadStyles,
} from './Post.styles';

const Post = ({ photo, photos, mapIndex }) => {
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
						<H4>12 hour ago</H4>
					</StyledLink>
				</HeaderStatus>
			</PostHeader>
			<P>{photo.alt_description}</P>
			<LazyLoadStyles>
				<Image
					src={photo.urls.regular}
					alt={photo.alt_description}
					onClick={() => dispatch(showCarousel(mapIndex))}
				/>
			</LazyLoadStyles>
			<Container>
				<Button onClick={() => dispatch(addToPhotos(photo))}>
					<Likes />
				</Button>
				<H1>{photo.likes}</H1>
			</Container>
			{display && <DisplayCarousel photos={photos} />}
		</PostContainer>
	);
};
export default Post;
