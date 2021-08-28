import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from 'components';
import {
	HomePage,
	UserPage,
	SearchResultsPage,
	SearchPhotoCollections,
	CollectionsPage,
	SavedPhotosPage,
} from 'pages';
import { GlobalStyle } from './App.styles';
import { ThemeProvider } from 'styled-components';

const lightTheme = {
	main: '#2d2d2d',
	secondary: '#cfd2d6',
};

const darkTheme = {
	main: '#cfd2d6',
	secondary: '#2d2d2d',
};

const App = () => {
	const [on, setOn] = useState(
		JSON.parse(localStorage.getItem('theme')) || false
	);
	const [savedPhotos, setSavedPhotos] = useState(
		JSON.parse(localStorage.getItem('savedPhotos')) || []
	);
	const [savedCollections, setSavedCollections] = useState(
		JSON.parse(localStorage.getItem('savedCollections')) || []
	);
	const [display, setDisplay] = useState(false);
	const [index, setIndex] = useState(-1);

	const setInStorage = (dataName, value) => {
		switch (dataName) {
			case 'savedPhotos':
				localStorage.setItem('savedPhotos', JSON.stringify(value));
				break;
			case 'savedCollections':
				localStorage.setItem('savedCollections', JSON.stringify(value));
				break;
			case 'theme':
				localStorage.setItem('theme', JSON.stringify(value));
				break;
			default:
				break;
		}
	};

	const toggleTheme = () => {
		const isLightThemOn = !on;
		setOn(isLightThemOn);
		setInStorage('theme', isLightThemOn);
	};

	const addToPhotos = (photo) => {
		if (!savedPhotos.find((savedPhoto) => savedPhoto.id === photo.id)) {
			const newSavedPhotos = [...savedPhotos, photo];
			setSavedPhotos(newSavedPhotos);
			setInStorage('savedPhotos', newSavedPhotos);
		}
	};

	const addToCollections = (collection) => {
		if (
			!savedCollections.find(
				(savedCollection) => savedCollection.id === collection.id
			)
		) {
			const newSavedCollections = [...savedCollections, collection];
			setSavedCollections(newSavedCollections);
			setInStorage('savedCollections', newSavedCollections);
		}
	};
	const removeFromSaved = (photo) => {
		const newSavedPhotos = savedPhotos.filter(
			(savedPhoto) => savedPhoto.id !== photo.id
		);
		setSavedPhotos(newSavedPhotos);
		setInStorage('savedPhotos', newSavedPhotos);
	};
	const removeFromSavedCollection = (collection) => {
		const newSavedCollections = savedCollections.filter(
			(savedCollection) => savedCollection.id !== collection.id
		);
		setSavedCollections(newSavedCollections);
		setInStorage('savedCollections', newSavedCollections);
	};

	const showCarousel = (i) => {
		setIndex(i);
		setDisplay(true);
	};

	const closeCarousel = () => {
		setDisplay(false);
		setIndex(-1);
	};

	return (
		<ThemeProvider theme={on ? lightTheme : darkTheme}>
			<Router>
				<GlobalStyle />
				<NavBar toggleTheme={toggleTheme} />
				<Switch>
					<Route
						exact
						path='/'
						render={(props) => {
							return (
								<HomePage
									addToPhotos={addToPhotos}
									removeFromSavedCollection={removeFromSavedCollection}
									showCarousel={showCarousel}
									closeCarousel={closeCarousel}
									savedCollections={savedCollections}
									on={on}
									display={display}
									index={index}
									{...props}
								/>
							);
						}}
					/>
					<Route
						exact
						path='/collections'
						render={(props) => {
							return (
								<CollectionsPage
									addToCollections={addToCollections}
									{...props}
								/>
							);
						}}
					/>
					<Route
						exact
						path='/saved/photos'
						render={(props) => {
							return (
								<SavedPhotosPage
									removeFromSaved={removeFromSaved}
									showCarousel={showCarousel}
									closeCarousel={closeCarousel}
									savedPhotos={savedPhotos}
									display={display}
									on={on}
									index={index}
									{...props}
								/>
							);
						}}
					/>
					<Route
						exact
						path='/users/:userId'
						render={(props) => {
							return (
								<UserPage
									addToPhotos={addToPhotos}
									showCarousel={showCarousel}
									closeCarousel={closeCarousel}
									display={display}
									index={index}
									{...props}
								/>
							);
						}}
					/>
					<Route
						exact
						path='/search/photos/:query'
						render={(props) => {
							return (
								<SearchResultsPage
									addToPhotos={addToPhotos}
									showCarousel={showCarousel}
									closeCarousel={closeCarousel}
									display={display}
									index={index}
									{...props}
								/>
							);
						}}
					/>
					<Route
						exact
						path='/search/collections/:query'
						render={(props) => {
							return (
								<SearchResultsPage
									addToCollections={addToCollections}
									display={display}
									index={index}
									{...props}
								/>
							);
						}}
					/>
					<Route
						exact
						path='/search/users/:query'
						component={SearchResultsPage}
					/>
					<Route
						exact
						path='/search/collections/photos/:collectionId'
						render={(props) => {
							return (
								<SearchPhotoCollections
									addToPhotos={addToPhotos}
									showCarousel={showCarousel}
									closeCarousel={closeCarousel}
									display={display}
									index={index}
									{...props}
								/>
							);
						}}
					/>
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default App;
