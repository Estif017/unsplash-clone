import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	SavedCollectionsContainer,
	ImageContainer,
	Image,
	Button,
} from './SavedCollections.styles';

export class SavedCollections extends Component {
	render() {
		const { savedCollections } = this.props;
		return (
			<SavedCollectionsContainer>
				{!savedCollections.length && (
					<h1>There is no saved Collections at the moment</h1>
				)}
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
							onClick={() => this.props.removeFromSavedCollection(collection)}>
							X
						</Button>
					</ImageContainer>
				))}
			</SavedCollectionsContainer>
		);
	}
}

export default SavedCollections;
