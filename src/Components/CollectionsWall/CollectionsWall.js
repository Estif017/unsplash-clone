import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ReactComponent as Star } from 'assets/star.svg';
import { CollectionsContainer, Image, P, More } from './CollectionsWall.Styles';

export default class CollectionsWall extends Component {
	render() {
		const { collections } = this.props;
		return (
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry>
					{collections.map((collection) => (
						<CollectionsContainer key={collection.id}>
							<LazyLoad>
								<Link to={`/search/collections/photos/${collection.id}`}>
									<Image src={collection.cover_photo.urls.regular} alt='' />
								</Link>
							</LazyLoad>
							<P>{collection.total_photos}</P>
							<More onClick={() => this.props.addToCollections(collection)}>
								<Star className='like' />
							</More>
						</CollectionsContainer>
					))}
				</Masonry>
			</ResponsiveMasonry>
		);
	}
}
