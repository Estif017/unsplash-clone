import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displaySelector, SavedPhotosSelector } from 'redux/appReducers';
import { removeFromSaved, showCarousel } from 'redux/appReducers/actions';
import { DisplayCarousel } from 'components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ImageContainer, Remove, Container } from './SavedPhotosPage.styles';
import { Image } from 'App.styles';

const SavedPhotosPage = (props) => {
	const dispatch = useDispatch();
	const savedphotos = Object.values(useSelector(SavedPhotosSelector));
	const display = useSelector(displaySelector);
	return (
		<Container>
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry>
					{!savedphotos.length && (
						<h1>There is no saved photos at the moment</h1>
					)}
					{savedphotos.map((photo, index) => (
						<ImageContainer key={photo.id}>
							<Image
								src={photo.urls.regular}
								alt='collection-img'
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
							isFavourite={true}
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
