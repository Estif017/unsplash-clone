import React from 'react';
import { ReactComponent as Likes } from 'assets/likes.svg';

import {
	PostContainer,
	StyledLink,
	HeaderStatus,
	More,
	PostHeader,
	Container,
	LazyLoadStyles,
	Image,
	H4,
	H1,
	P,
} from './Post.styles';

const Post = ({ photo, addToPhotos }) => {
	return (
		<PostContainer>
			<PostHeader>
				<HeaderStatus>
					<Container>
						<StyledLink to={`/users/${photo.user.username}`}>
							<Image
								src={photo.user.profile_image.medium}
								alt='user-profile'
								className='profile-image'
							/>
						</StyledLink>
					</Container>
					<Container>
						<StyledLink to={`/users/${photo.user.username}`}>
							<H4>{photo.user.name}</H4>
						</StyledLink>
						<H4 className='posted-time'>12 hour ago</H4>
					</Container>
				</HeaderStatus>
			</PostHeader>
			<P>{photo.user.bio}</P>
			<LazyLoadStyles>
				<Image src={photo.urls.regular} alt='posted-img' />
			</LazyLoadStyles>
			<Container className='Like-star'>
				<More onClick={() => addToPhotos(photo)}>
					<Likes className='like' />
				</More>
				<H1>{photo.likes}</H1>
			</Container>
		</PostContainer>
	);
};

export default Post;
