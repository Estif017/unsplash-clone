import React, { Component } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ImageContainer, Image, Button } from './SavedPhotos.styles';

export class SavedPhotos extends Component {
	render() {
		const { savedPhotos } = this.props;
		!savedPhotos.length && <h1>There is no saved photos at the moment</h1>;
		return (
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry>
					{savedPhotos.map((photo) => (
						<ImageContainer key={photo.id}>
							<Image src={photo.urls.regular} alt='collection-img' />
							<Button
								className='remove'
								onClick={() => this.props.removeFromSaved(photo)}>
								X
							</Button>
						</ImageContainer>
					))}
				</Masonry>
			</ResponsiveMasonry>
		);
	}
}

export default SavedPhotos;
