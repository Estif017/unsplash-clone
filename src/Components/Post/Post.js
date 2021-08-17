import React, { Component } from 'react';
import { ReactComponent as Likes } from 'assets/likes.svg';

import { DisplayCarousel } from 'components';
import {
	PostContainer,
	HeaderStatus,
	PostHeader,
	Container,
	LazyLoadStyles,
} from './Post.styles';
import { StyledLink, Image, H4, P, Button, H1 } from 'App.styles';

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
						onClick={() => showCarousel(mapIndex)}
					/>
				</LazyLoadStyles>
				<Container>
					<Button onClick={() => addToPhotos(photo)}>
						<Likes />
					</Button>
					<H1>{photo.likes}</H1>
				</Container>
				{display && (
					<DisplayCarousel
						closeCarousel={closeCarousel}
						addToPhotos={addToPhotos}
						index={index}
						photos={photos}
					/>
				)}
			</PostContainer>
		);
	}
}
