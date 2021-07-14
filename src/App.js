import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from 'components';
import {
	HomePage,
	SavedPhotos,
	UserPage,
	SearchResults,
	SearchPhotoCollections,
} from 'pages';
import { AppContainer, GlobalStyle } from './App.styles';

export default class App extends React.Component {
	render() {
		return (
			<>
				<GlobalStyle />
				<AppContainer>
					<NavBar />
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
						{/* search User */}
						<Route
							exact
							path='/search/collections/:query/photos'
							component={SearchPhotoCollections}
						/>
					</Switch>
				</AppContainer>
			</>
		);
	}
}
