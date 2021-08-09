import React from 'react';
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
export default class App extends React.Component {
	state = {
		on: JSON.parse(localStorage.getItem('theme')) || false,
		savedPhotos: JSON.parse(localStorage.getItem('savedPhotos')) || [],
		savedCollections:
			JSON.parse(localStorage.getItem('savedCollections')) || [],
		display: 'none',
		carousel: [],
	};
	setInStorage = (dataName, value) => {
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
	toggleTheme = () => {
		let theme = !this.state.on;
		this.setState({ on: theme });
		this.setInStorage('theme', theme);
	};
	addToPhotos = (photo) => {
		if (
			this.state.savedPhotos.filter((saved) => saved.id === photo.id).length ===
			0
		) {
			let savedPhotos = [...this.state.savedPhotos, photo];
			this.setState({ savedPhotos: savedPhotos });
			this.setInStorage('savedPhotos', savedPhotos);
		}
	};
	addToCollections = (collection) => {
		if (
			this.state.savedCollections.filter((saved) => saved.id === collection.id)
				.length === 0
		) {
			let savedCollections = [...this.state.savedCollections, collection];
			this.setState({
				savedCollections: savedCollections,
			});
			this.setInStorage('savedCollections', savedCollections);
		}
	};
	removeFromSaved = (photo) => {
		const newSavedPhotos = this.state.savedPhotos.filter(
			(savedPhoto) => savedPhoto.id !== photo.id
		);
		this.setState({ savedPhotos: newSavedPhotos });
		this.setInStorage('savedPhotos', newSavedPhotos);
	};
	removeFromSavedCollection = (collection) => {
		const newSavedCollections = this.state.savedCollections.filter(
			(savedCollection) => savedCollection.id !== collection.id
		);
		this.setState({ savedCollections: newSavedCollections });
		this.setInStorage('savedCollections', newSavedCollections);
	};
	showCarousel = (photo) => {
		let index = this.state.savedPhotos.findIndex((i) => i.id === photo.id);
		this.setState({
			carousel: [this.state.savedPhotos[index], ...this.state.savedPhotos],
			display: 'block',
		});
	};

	closeCarousel = () => {
		this.setState({ display: 'none' });
	};
	render() {
		return (
			<ThemeProvider theme={this.state.on ? lightTheme : darkTheme}>
				<Router>
					<GlobalStyle />
					<NavBar toggleTheme={this.toggleTheme} />
					<Switch>
						<Route
							exact
							path='/'
							render={(props) => {
								return (
									<HomePage
										addToPhotos={this.addToPhotos}
										savedCollections={this.state.savedCollections}
										removeFromSavedCollection={this.removeFromSavedCollection}
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
										addToCollections={this.addToCollections}
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
										savedPhotos={this.state.savedPhotos}
										removeFromSaved={this.removeFromSaved}
										showCarousel={this.showCarousel}
										carousel={this.state.carousel}
										display={this.state.display}
										closeCarousel={this.closeCarousel}
										{...props}
									/>
								);
							}}
						/>
						<Route
							exact
							path='/users/:userId'
							render={(props) => {
								return <UserPage addToPhotos={this.addToPhotos} {...props} />;
							}}
						/>
						<Route
							exact
							path='/search/photos/:query'
							render={(props) => {
								return (
									<SearchResultsPage
										addToPhotos={this.addToPhotos}
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
										addToCollections={this.addToCollections}
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
										addToPhotos={this.addToPhotos}
										{...props}
									/>
								);
							}}
						/>
					</Switch>
				</Router>
			</ThemeProvider>
		);
	}
}
