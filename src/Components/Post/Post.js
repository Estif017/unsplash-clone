import React, { Component } from 'react';
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
import { DisplayCarousel } from 'components';

export default class Post extends Component {
	render() {
		const {
			photo,
			addToPhotos,
			showCarousel,
			index,
			display,
			closeCarousel,
			photos,
			mapIndex,
		} = this.props;

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
				<P>{photo.alt_description}</P>
				<LazyLoadStyles>
					<Image
						src={photo.urls.regular}
						alt={photo.alt_description}
						onClick={() => showCarousel(mapIndex)}
					/>
				</LazyLoadStyles>
				<Container className='Like-star'>
					<More onClick={() => addToPhotos(photo)}>
						<Likes className='like' />
					</More>
					<H1>{photo.likes}</H1>
				</Container>
				{display === 'block' && (
					<DisplayCarousel
						display={display}
						closeCarousel={closeCarousel}
						index={index}
						photos={photos}
					/>
				)}
			</PostContainer>
		);
	}
}
