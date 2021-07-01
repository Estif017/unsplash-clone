import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from 'components';
import { PostPage, SearchCollection } from 'pages';
import { AppContainer, GlobalStyle } from './App.styled';

export default class App extends React.Component {
	render() {
		return (
			<>
				<GlobalStyle />
				<AppContainer>
					<NavBar />
					<Switch>
						<Route exact path='/' component={PostPage} />
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
