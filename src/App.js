import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { NavBar } from 'Components';
import { onSelector } from 'redux/appReducers';
import {
	HomePage,
	UserPage,
	SearchResultsPage,
	SearchPhotoCollections,
	CollectionsPage,
	SavedPhotosPage,
	PageNotFound,
} from 'Pages';
import { AppContainer, GlobalStyle } from './App.styles';

const lightTheme = {
	main: '#2d2d2d',
	secondary: '#F9FAFB',
};

const darkTheme = {
	main: '#cfd2d6',
	secondary: '#2d2d2d',
};

const App = () => {
	const on = useSelector(onSelector);
	return (
		<ThemeProvider theme={on ? lightTheme : darkTheme}>
			<Router>
				<GlobalStyle />
				<AppContainer>
					<NavBar />
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route exact path='/collections' component={CollectionsPage} />
						<Route exact path='/saved/photos' component={SavedPhotosPage} />
						<Route exact path='/users/:userId' component={UserPage} />
						<Route
							exact
							path='/search/photos/:query'
							component={SearchResultsPage}
						/>
						<Route
							exact
							path='/search/collections/:query'
							component={SearchResultsPage}
						/>
						<Route
							exact
							path='/search/users/:query'
							component={SearchResultsPage}
						/>
						<Route
							exact
							path='/search/collections/photos/:collectionId'
							component={SearchPhotoCollections}
						/>
						<Route component={PageNotFound} />
					</Switch>
				</AppContainer>
			</Router>
		</ThemeProvider>
	);
};

export default App;
