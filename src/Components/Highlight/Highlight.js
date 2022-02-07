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
import { ReactComponent as Add } from 'assets/Add.svg';
import {
	HighlightContainer,
	CollectionsContainer,
	Image,
	View,
	AddBtn,
	Remove,
	Delete,
	Content,
	FormContainer,
	SearchFormContainer,
	CollectionTitle,
	NextArrowBtn,
	PrevArrowBtn,
	ImageOverlay,
	TotalPhotos,
} from './Highlight.styles';
import { useState } from 'react';

const Highlight = () => {
	const display = useSelector(displaySelector);
	const formDisplay = useSelector(formDisplaySelector);
	const savedCollections = Object.values(useSelector(savedCollectionsSelector));
	const form = useRef(null);
	const [collectionId, setCollectionId] = useState();
	const dispatch = useDispatch();

	const NextArrow = ({ onClick }) => <NextArrowBtn onClick={onClick} />;

	const PrevArrow = ({ onClick }) => <PrevArrowBtn onClick={onClick} />;

	useRef(() => {
		if (formDisplay) {
			form.current.focus();
		}
	}, [formDisplay]);
	let slides = savedCollections.length > 4 ? 5 : savedCollections.length + 1;
	let width;
	switch (savedCollections.length) {
		case 0:
			width = '20%';
			break;
		case 1:
			width = '40%';
			break;
		case 2:
			width = '60%';
			break;
		case 3:
			width = '80%';
			break;
		default:
			width = '100%';
			break;
	}
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: slides,
		slidesToScroll: 1,
		accessibility: false,
		arrows: display === true ? false : true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: slides >= 4 ? 4 : slides,
				},
			},
			{
				breakpoint: 675,
				settings: {
					slidesToShow: slides >= 3 ? 3 : slides,
				},
			},
		],
	};

	return (
		<HighlightContainer width={width}>
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
							/>
							<CollectionTitle>{collection.title}</CollectionTitle>
							<ImageOverlay
								onClick={() => {
									setCollectionId(collection.id);
									dispatch(showHighlightPhotos(collection.id));
								}}>
								<Delete
									onClick={() =>
										dispatch(removeFromSavedCollection(collection))
									}>
									&times;
								</Delete>
								<TotalPhotos>
									{collection.total_photos}
									<br />
									Photos
								</TotalPhotos>
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
						<HighlightContents collectionId={collectionId} />
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
