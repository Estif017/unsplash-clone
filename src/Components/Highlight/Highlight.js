import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import {
	HighlightContainer,
	CollectionsContainer,
	Container,
	View,
	AddBtn,
	Remove,
	Content,
	FormContainer,
	SearchFormContainer,
} from './Highlight.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HighlightContents from 'components/HighlightContents';
import { ReactComponent as Add } from 'assets/add.svg';
import SearchForm from 'components/SearchForm';
import { Image, ImageOverlay } from 'App.styles';

const Highlight = ({
	savedCollections,
	removeFromSavedCollection,
	addToPhotos,
}) => {
	const [display, setDisplay] = useState(false);
	const [formDisplay, setFormDisplay] = useState(false);
	const [id, setId] = useState(null);
	const form = useRef(null);

	const showCollectionPhotos = (id) => {
		setDisplay(true);
		setId(id);
	};
	const closeCollectionPhotos = () => {
		setDisplay(false);
		setFormDisplay(false);
	};

	useRef(() => {
		if (formDisplay) {
			form.current.focus();
		}
	}, [formDisplay]);

	const slides = savedCollections.length > 3 ? 4 : savedCollections.length + 1;
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: slides,
		slidesToScroll: 1,
	};

	return (
		<HighlightContainer width={savedCollections.length < 2 && '50%'}>
			{savedCollections.length ? (
				<Slider {...settings}>
					<CollectionsContainer>
						<Image
							borderRadius='15px'
							src={
								'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2t5fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
							}
						/>
						<AddBtn onClick={() => setFormDisplay(true)}>
							<Add />
						</AddBtn>
					</CollectionsContainer>

					{savedCollections.map((collection) => (
						<CollectionsContainer key={collection.id}>
							<Image
								borderRadius='15px'
								src={collection.cover_photo.urls.regular}
								alt=''
							/>
							<ImageOverlay hover highlight bgColor='rgba(0,0,0,0.2)'>
								<Remove onClick={() => removeFromSavedCollection(collection)}>
									&times;
								</Remove>
								<Container
									onClick={() => showCollectionPhotos(collection.id)}
								/>
							</ImageOverlay>
						</CollectionsContainer>
					))}
				</Slider>
			) : (
				<CollectionsContainer>
					<Image
						borderRadius='15px'
						src={
							'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2t5fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
						}
					/>
					<AddBtn onClick={() => setFormDisplay(true)}>
						<Add />
					</AddBtn>
				</CollectionsContainer>
			)}
			{display && (
				<View>
					<Content>
						<Remove onClick={closeCollectionPhotos}>&times;</Remove>
						<HighlightContents id={id} addToPhotos={addToPhotos} />
					</Content>
				</View>
			)}
			{formDisplay && (
				<FormContainer
					ref={form}
					onBlur={closeCollectionPhotos}
					formDisplay={formDisplay}>
					<Remove onClick={closeCollectionPhotos}>&times;</Remove>
					<SearchFormContainer>
						<SearchForm formDisplay={formDisplay} />
					</SearchFormContainer>
				</FormContainer>
			)}
		</HighlightContainer>
	);
};

export default Highlight;
