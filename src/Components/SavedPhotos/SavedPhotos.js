import React, { Component } from 'react';
import {
	SavedPhotosContainer,
	ImageContainer,
	Image,
	Button,
} from './SavedPhotos.styles';

export class SavedPhotos extends Component {
	render() {
		const { savedPhotos } = this.props;
		return (
			<SavedPhotosContainer>
				{!savedPhotos.length && <h1>There is no saved photos at the moment</h1>}
				{savedPhotos.map((photo) => (
					<ImageContainer>
						<Image
							src={photo.urls.regular}
							alt='collection-img'
							key={photo.id}
						/>
						<Button
							className='remove'
							onClick={() => this.props.removeFromSaved(photo)}>
							X
						</Button>
					</ImageContainer>
				))}
			</SavedPhotosContainer>
		);
	}
}

export default SavedPhotos;
