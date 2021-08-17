import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { ReactComponent as Star } from 'assets/star.svg';
import { Collection, TotalPhotos, Block } from './CollectionsWall.Styles';
import {
	Image,
	ImageOverlay,
	UserLink,
	StyledLink,
	SaveBtn,
	Creator,
	TotalLikes,
} from 'App.styles';

export default class CollectionsWall extends Component {
	render() {
		const { collection, margin, height } = this.props;
		return (
			<Collection margin={margin} height={height}>
				<LazyLoad>
					<Image
						src={collection.cover_photo.urls.regular}
						alt=''
						height={height}
					/>
				</LazyLoad>
				<ImageOverlay hover bgColor='rgba(0, 0, 0, 0.6)'>
					<UserLink to={`/users/${collection.user.username}`}>
						<Image
							borderRadius='50%'
							height='50px'
							width='50px'
							src={collection.user.profile_image.large}
						/>
						<Creator>{collection.user.username}</Creator>
					</UserLink>
					<StyledLink to={`/search/collections/photos/${collection.id}`}>
						<Block>
							<TotalPhotos>
								&nbsp;{collection.total_photos}
								<br />
								photos
							</TotalPhotos>
						</Block>
					</StyledLink>
					<SaveBtn onClick={() => this.props.addToCollections(collection)}>
						<Star />
					</SaveBtn>
					<TotalLikes>{collection.title}</TotalLikes>
				</ImageOverlay>
			</Collection>
		);
	}
}
