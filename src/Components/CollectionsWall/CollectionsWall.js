import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { ReactComponent as Star } from 'assets/star.svg';
import {
	Collection,
	Image,
	P,
	More,
	StyledLink,
	ImageOverlay,
	Creator,
	Title,
	Block,
} from './CollectionsWall.Styles';

export default class CollectionsWall extends Component {
	render() {
		const { collection, className } = this.props;
		return (
			<Collection
				className={className[0]}
				background={collection.cover_photo.color}>
				<LazyLoad>
					<Image
						className={className.indexOf(className[1]) && className[1]}
						src={collection.cover_photo.urls.regular}
						alt=''
					/>
				</LazyLoad>
				<ImageOverlay>
					<StyledLink
						className='profile_pic'
						to={`/users/${collection.user.username}`}>
						<Image
							className='profile'
							src={collection.user.profile_image.large}
						/>
						<Creator>{collection.user.username}</Creator>
					</StyledLink>
					<StyledLink to={`/search/collections/photos/${collection.id}`}>
						<Block>
							<P>{collection.total_photos}</P>
						</Block>
					</StyledLink>
					<More onClick={() => this.props.addToCollections(collection)}>
						<Star className='like' />
					</More>
					<Title>{collection.title}</Title>
				</ImageOverlay>
			</Collection>
		);
	}
}
