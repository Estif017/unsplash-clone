import React, { Component } from 'react';
import { SearchForm } from '..';
import { ReactComponent as CameraIcon } from 'assets/camera.svg';
import { ReactComponent as SavedIcon } from 'assets/saved.svg';
import { ReactComponent as ThemeIcon } from 'assets/theme.svg';
import { Nav, Title, Li, Ul } from './NavBar.styles';
import { StyledLink, Button } from 'App.styles';

export default class index extends Component {
	handleClick = () => {
		this.props.toggleTheme();
	};
	render() {
		return (
			<Nav>
				<StyledLink to='/'>
					<Title>Unsplash</Title>
				</StyledLink>
				<Ul>
					<Li>
						<SearchForm />
					</Li>
					<Li>
						<StyledLink to='/collections'>
							<CameraIcon />
						</StyledLink>
					</Li>
					<Li>
						<StyledLink to='/saved/photos'>
							<SavedIcon />
						</StyledLink>
					</Li>
					<Button onClick={this.handleClick}>
						<ThemeIcon />
					</Button>
				</Ul>
			</Nav>
		);
	}
}
