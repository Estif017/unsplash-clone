import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displaySelector, SavedPhotosSelector } from 'redux/appReducers';
import { removeFromSaved, showCarousel } from 'redux/appReducers/actions';
import { DisplayCarousel } from 'Components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ImageContainer, Remove, Container } from './SavedPhotosPage.styles';
import { Image } from 'App.styles';

const SavedPhotosPage = (props) => {
	const dispatch = useDispatch();
	const savedphotos = Object.values(useSelector(SavedPhotosSelector));
	const display = useSelector(displaySelector);
	return (
		<Container>
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 380: 3 }}>
				<Masonry>
					{!savedphotos.length && (
						<h1>You don't have any saved photos at the moment</h1>
					)}
					{savedphotos.map((photo, index) => (
						<ImageContainer key={photo.id}>
							<Image
								src={photo.urls.regular}
								alt='collection-img'
								borderRadius='10px'
								onClick={() => dispatch(showCarousel(index))}
							/>
							<Remove onClick={() => dispatch(removeFromSaved(photo))}>
								&times;
							</Remove>
						</ImageContainer>
					))}
					{display && (
						<DisplayCarousel
							photos={savedphotos}
							isFavorite={true}
							{...props}
							blur={0.6}
						/>
					)}
				</Masonry>
			</ResponsiveMasonry>
		</Container>
	);
};
export default SavedPhotosPage;
