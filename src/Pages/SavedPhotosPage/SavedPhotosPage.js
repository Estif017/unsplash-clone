import React, { Component } from 'react';
import { DisplayCarousel } from 'components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ImageContainer, Image, Button } from './SavedPhotosPage.styles';

export default class SavedPhotosPage extends Component {
	render() {
		const { savedPhotos, showCarousel, carousel, closeCarousel, display } =
			this.props;
		console.log({ display });
		return (
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry>
					{!savedPhotos.length && (
						<h1>There is no saved photos at the moment</h1>
					)}
					{savedPhotos.map((photo) => (
						<ImageContainer key={photo.id} onClick={() => showCarousel(photo)}>
							<Image src={photo.urls.regular} alt='collection-img' />
							<Button
								className='remove'
								onClick={() => this.props.removeFromSaved(photo)}>
								X
							</Button>
						</ImageContainer>
					))}
					{display === 'block' && (
						<DisplayCarousel
							display={display}
							closeCarousel={closeCarousel}
							carousel={carousel}
						/>
					)}
				</Masonry>
			</ResponsiveMasonry>
		);
	}
}
