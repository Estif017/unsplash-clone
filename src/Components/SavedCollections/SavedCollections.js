import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ImageContainer, Image, Button } from './SavedCollections.styles';

export class SavedCollections extends Component {
	render() {
		const { savedCollections } = this.props;
		!savedCollections.length && (
			<h1>There is no saved Collections at the moment</h1>
		);
		return (
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry>
					{savedCollections.map((collection) => (
						<ImageContainer key={collection.id}>
							<Link to={`/search/collections/photos/${collection.id}`}>
								<Image
									src={collection.cover_photo.urls.regular}
									alt='collection-img'
								/>
							</Link>
							<Button
								className='remove'
								onClick={() =>
									this.props.removeFromSavedCollection(collection)
								}>
								X
							</Button>
						</ImageContainer>
					))}
				</Masonry>
			</ResponsiveMasonry>
		);
	}
}

export default SavedCollections;
