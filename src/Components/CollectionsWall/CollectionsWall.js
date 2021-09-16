import React from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch } from 'react-redux';
import {
	addToCollections,
	removeFromSavedCollection,
} from 'redux/appReducers/actions';
import { ReactComponent as Star } from 'assets/Star.svg';
import { ReactComponent as Starred } from 'assets/LikedCollection.svg';
import { Collection, TotalPhotos, Block } from './CollectionsWall.Styles';
import {
	Image,
	ImageOverlay,
	UserLink,
	StyledLink,
	SaveBtn,
	Creator,
	TotalLikes as CollectionTitle,
} from 'App.styles';

const CollectionsWall = ({ collection, margin, height, isFavourite }) => {
	const dispatch = useDispatch();

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
				<SaveBtn>
					{isFavourite ? (
						<Star onClick={() => dispatch(addToCollections(collection))} />
					) : (
						<Starred
							onClick={() => dispatch(removeFromSavedCollection(collection))}
						/>
					)}
				</SaveBtn>
				<CollectionTitle>{collection.title}</CollectionTitle>
			</ImageOverlay>
		</Collection>
	);
};

export default CollectionsWall;
