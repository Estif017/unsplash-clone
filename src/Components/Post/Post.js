import React from 'react';
import { ReactComponent as Like } from 'assets/likes.svg';
import { ReactComponent as Liked } from 'assets/saved.svg';
import { useDispatch, useSelector } from 'react-redux';
import { photosSelector } from 'redux/homePageReducer';
import {
	addToPhotos,
	removeFromSaved,
	showCarousel,
} from 'redux/appReducers/actions';
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

const Post = ({ photo, mapIndex, isFavored }) => {
	const dispatch = useDispatch();
	const display = useSelector(displaySelector);
	const photos = useSelector(photosSelector);

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
				<Button>
					{isFavored ? (
						<Like onClick={() => dispatch(addToPhotos(photo))} />
					) : (
						<Liked onClick={() => dispatch(removeFromSaved(photo))} />
					)}
				</Button>
				<H1>{photo.likes}</H1>
			</Container>
			{display && <DisplayCarousel photos={photos} isFavored={isFavored} />}
		</PostContainer>
	);
};
export default Post;
