import React, { Component } from 'react';
import Slider from 'react-slick';
import {
	HighlightContainer,
	CollectionsContainer,
	Image,
	Container,
	View,
	Remove,
	ImageOverlay,
	Content,
	AddBtn,
	FormContainer,
	SearchFormContainer,
} from './Highlight.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HighlightContents from 'components/HighlightContents';
import { ReactComponent as Add } from 'assets/add.svg';
import SearchForm from 'components/SearchForm';

export class Highlight extends Component {
	state = {
		display: 'none',
		formDisplay: 'none',
		id: null,
	};

	showCollectionPhotos = (id) => {
		this.setState({ display: 'block', id });
	};
	closeCollectionPhotos = () => {
		this.setState({ display: 'none', formDisplay: 'none' });
	};
	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 1,
		};
		const { display, id, formDisplay } = this.state;
		const { savedCollections } = this.props;
		return (
			<HighlightContainer>
				<Container>
					<Slider {...settings}>
						<CollectionsContainer className='add'>
							<Image
								src={
									'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2t5fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
								}
							/>
							<AddBtn onClick={() => this.setState({ formDisplay: 'block' })}>
								<Add />
							</AddBtn>
						</CollectionsContainer>
						{savedCollections.map((collection) => (
							<CollectionsContainer key={collection.id}>
								<Image src={collection.cover_photo.urls.regular} alt='' />
								<ImageOverlay
									onClick={() => this.showCollectionPhotos(collection.id)}>
									<Remove
										onClick={() =>
											this.props.removeFromSavedCollection(collection)
										}>
										&times;
									</Remove>
								</ImageOverlay>
							</CollectionsContainer>
						))}
					</Slider>
				</Container>
				{display === 'block' && (
					<View display={display}>
						<Content>
							<Remove className='close' onClick={this.closeCollectionPhotos}>
								&times;
							</Remove>
							<HighlightContents id={id} />
						</Content>
					</View>
				)}
				{formDisplay === 'block' && (
					<FormContainer formDisplay={formDisplay}>
						<Remove className='form' onClick={this.closeCollectionPhotos}>
							&times;
						</Remove>
						<SearchFormContainer>
							<SearchForm className='collections' />
						</SearchFormContainer>
					</FormContainer>
				)}
			</HighlightContainer>
		);
	}
}

export default Highlight;
