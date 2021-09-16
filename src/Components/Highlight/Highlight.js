import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { savedCollectionsSelector } from 'redux/appReducers';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromSavedCollection } from 'redux/appReducers/actions';
import {
	displaySelector,
	formDisplaySelector,
} from 'redux/highlightReducer/highlightCollectionsReducer';
import {
	showSearchCollectionsForm,
	showHighlightPhotos,
	closeHighlightPhotos,
} from 'redux/highlightReducer/highlightCollectionsReducer/action';
import { HighlightContents, SearchForm } from 'Components';
import { ReactComponent as Add } from 'assets/add.svg';
import { Image } from 'App.styles';
import {
	HighlightContainer,
	CollectionsContainer,
	View,
	AddBtn,
	Remove,
	Delete,
	Content,
	FormContainer,
	SearchFormContainer,
	CollectionTitle,
} from './Highlight.styles';

const Highlight = () => {
	const display = useSelector(displaySelector);
	const formDisplay = useSelector(formDisplaySelector);
	const savedCollections = Object.values(useSelector(savedCollectionsSelector));
	const form = useRef(null);
	const dispatch = useDispatch();

	useRef(() => {
		if (formDisplay) {
			form.current.focus();
		}
	}, [formDisplay]);

	const slides = savedCollections.length > 4 ? 5 : savedCollections.length + 1;
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: slides,
		slidesToScroll: 1,
	};

	return (
		<HighlightContainer
			width={savedCollections.length < 2 ? '50%' : 'undefined'}>
			{savedCollections.length ? (
				<Slider {...settings}>
					<CollectionsContainer>
						<Image
							borderRadius='15px'
							src={
								'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2t5fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
							}
						/>
						<AddBtn onClick={() => dispatch(showSearchCollectionsForm())}>
							<Add />
						</AddBtn>
					</CollectionsContainer>

					{savedCollections.map((collection) => (
						<CollectionsContainer key={collection.id}>
							<Image
								borderRadius='15px'
								src={collection.cover_photo.urls.regular}
								alt=''
								onClick={() => dispatch(showHighlightPhotos(collection.id))}
							/>
							<CollectionTitle>{collection.title}</CollectionTitle>
							<Delete
								onClick={() => dispatch(removeFromSavedCollection(collection))}>
								&times;
							</Delete>
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
					<AddBtn onClick={() => dispatch(showSearchCollectionsForm())}>
						<Add />
					</AddBtn>
				</CollectionsContainer>
			)}
			{display && (
				<View>
					<Content>
						<Remove onClick={() => dispatch(closeHighlightPhotos())}>
							&times;
						</Remove>
						<HighlightContents />
					</Content>
				</View>
			)}
			{formDisplay && (
				<FormContainer
					ref={form}
					onBlur={() => dispatch(closeHighlightPhotos())}
					formDisplay={formDisplay}>
					<Remove onClick={() => dispatch(closeHighlightPhotos())}>
						&times;
					</Remove>
					<SearchFormContainer>
						<SearchForm formDisplay={formDisplay} />
					</SearchFormContainer>
				</FormContainer>
			)}
		</HighlightContainer>
	);
};

export default Highlight;
