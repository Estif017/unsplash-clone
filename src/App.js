import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from 'components';
import {
	HomePage,
	SavedPhotos,
	UserPage,
	SearchResults,
	SearchPhotoCollections,
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
		on: false,
	};

	toggleTheme = () => {
		this.setState({ on: !this.state.on });
	};
	render() {
		return (
			<ThemeProvider theme={this.state.on ? lightTheme : darkTheme}>
				<Router>
					<GlobalStyle />
					<NavBar toggleTheme={this.toggleTheme} />
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route exact path='/saved' component={SavedPhotos} />
						<Route exact path='/users/:userId' component={UserPage} />
						<Route
							exact
							path='/search/photos/:query'
							component={SearchResults}
						/>
						<Route
							exact
							path='/search/collections/:query'
							component={SearchResults}
						/>
						<Route
							exact
							path='/search/users/:query'
							component={SearchResults}
						/>
						<Route
							exact
							path='/search/collections/photos/:collectionId'
							component={SearchPhotoCollections}
						/>
					</Switch>
				</Router>
			</ThemeProvider>
		);
	}
}
