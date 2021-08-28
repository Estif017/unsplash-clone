import React from 'react';
import { DisplayCarousel } from 'components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ImageContainer, Remove, Container } from './SavedPhotosPage.styles';
import { Image } from 'App.styles';

const SavedPhotosPage = (props) => {
	const { savedPhotos, showCarousel, display } = props;
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
							<Remove onClick={() => props.removeFromSaved(photo)}>
								&times;
							</Remove>
						</ImageContainer>
					))}
					{display && <DisplayCarousel photos={savedPhotos} {...props} />}
				</Masonry>
			</ResponsiveMasonry>
		</Container>
	);
};
export default SavedPhotosPage;
