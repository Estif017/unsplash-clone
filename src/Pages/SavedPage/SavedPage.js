import { SavedCollections, SavedPhotos } from 'components';
import React, { Component } from 'react';
import { LinkContainer, LinkStyles, SavedContainer } from './SavedPage.styles';

export default class SavedPage extends Component {
	render() {
		const location = this.props.history.location.pathname;
		const photos = `/saved/photos`;
		const collections = `/saved/collections`;
		return (
			<SavedContainer>
				<LinkContainer>
					<LinkStyles to={photos}>Photos</LinkStyles>
					<LinkStyles to={collections}>Collection</LinkStyles>
				</LinkContainer>
				<hr />
				{location === photos && (
					<SavedPhotos
						savedPhotos={this.props.savedPhotos}
						removeFromSaved={this.props.removeFromSaved}
					/>
				)}
				{location === collections && (
					<SavedCollections
						removeFromSavedCollection={this.props.removeFromSavedCollection}
						savedCollections={this.props.savedCollections}
					/>
				)}
			</SavedContainer>
		);
	}
}
