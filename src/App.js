import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from 'components';
import { PostPage, SearchCollection, SavedPhotos, UserPage } from 'Pages';
import { AppContainer, GlobalStyle } from './App.styles';

export default class App extends React.Component {
	render() {
		return (
			<>
				<GlobalStyle />
				<AppContainer>
					<NavBar />
					<Switch>
						<Route exact path='/' component={PostPage} />
						<Route exact path='/saved' component={SavedPhotos} />
						<Route exact path='/users/:id' component={UserPage} />
						<Route
							exact
							path='/search/collections/:id'
							component={SearchCollection}
						/>
					</Switch>
				</AppContainer>
			</>
		);
	}
}
