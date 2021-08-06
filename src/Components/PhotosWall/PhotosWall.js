import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ReactComponent as Likes } from 'assets/likes.svg';
import {
	ImageContainer,
	Image,
	P,
	ImageOverlay,
	StyledLink,
	Creator,
	More,
	PhotosContainer,
} from './PhotosWall.styles';

export default class PhotosWall extends Component {
	render() {
		const { photos, isLoading, hasError } = this.props;
		return (
			<PhotosContainer>
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
					<Masonry>
						{isLoading && !hasError && <h1>Loading......</h1>}
						{hasError && !isLoading && <h1>Error......</h1>}
						{photos.map((photo) => {
							return (
								<ImageContainer background={photo.color} key={photo.id}>
									<LazyLoad>
										<Image src={photo.urls.regular} alt='collection-img' />
									</LazyLoad>
									<ImageOverlay>
										<StyledLink
											className='profile_pic'
											to={`/users/${photo.user.username}`}>
											<Image
												className='profile'
												src={photo.user.profile_image.large}
											/>
											<Creator>{photo.user.username}</Creator>
										</StyledLink>
										<More onClick={() => this.props.addToPhotos(photo)}>
											<Likes className='like' />
										</More>
										<P>{photo.likes}</P>
									</ImageOverlay>
								</ImageContainer>
							);
						})}
					</Masonry>
				</ResponsiveMasonry>
			</PhotosContainer>
		);
	}
}
