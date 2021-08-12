import React, { Component } from 'react';
import { DisplayCarousel } from 'components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import {
	ImageContainer,
	Image,
	Button,
	Container,
} from './SavedPhotosPage.styles';

export default class SavedPhotosPage extends Component {
	render() {
		const { savedPhotos, showCarousel, display } = this.props;
		console.log(this.props);
		return (
			<Container>
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
					<Masonry>
						{!savedPhotos.length && (
							<h1>There is no saved photos at the moment</h1>
						)}
						{savedPhotos.map((photo, index) => (
							<ImageContainer key={photo.id}>
								<Image
									src={photo.urls.regular}
									alt='collection-img'
									onClick={() => showCarousel(index)}
								/>
								<Button
									className='remove'
									onClick={() => this.props.removeFromSaved(photo)}>
									X
								</Button>
							</ImageContainer>
						))}
						{display && (
							<DisplayCarousel photos={savedPhotos} {...this.props} />
						)}
					</Masonry>
				</ResponsiveMasonry>
			</Container>
		);
	}
}
