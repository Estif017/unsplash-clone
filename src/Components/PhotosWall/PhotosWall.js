import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ReactComponent as Likes } from 'assets/likes.svg';
import { ImageContainer, Image, Container, More, P } from './PhotosWall.styles';

export default class PhotosWall extends Component {
	render() {
		return (
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry>
					{this.props.photos.map((photo) => {
						return (
							<ImageContainer key={photo.id}>
								<LazyLoad>
									<Image src={photo.urls.regular} alt='collection-img' />
								</LazyLoad>
								<Container>
									<More
										className='save-photo'
										onClick={() => {
											this.props.addToPhotos(photo);
										}}>
										<Likes className='like' />
									</More>
									<P>{photo.likes}</P>
								</Container>
							</ImageContainer>
						);
					})}
				</Masonry>
			</ResponsiveMasonry>
		);
	}
}
