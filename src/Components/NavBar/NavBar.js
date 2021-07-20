import React, { Component } from 'react';
import { Nav, H1, Li, StyledLink, Ul } from './NavBar.styles';
import { SearchForm } from '..';
import { ReactComponent as CameraIcon } from 'assets/camera.svg';
import { ReactComponent as SavedIcon } from 'assets/saved.svg';
import { ReactComponent as ThemeIcon } from 'assets/theme.svg';

export default class index extends Component {
	render() {
		return (
			<Nav>
				<StyledLink to='/'>
					<H1>Unsplash</H1>
				</StyledLink>
				<Ul>
					<Li>
						<SearchForm />
					</Li>
					<Li>
						<StyledLink to='/'>
							<CameraIcon />
						</StyledLink>
					</Li>
					<Li>
						<StyledLink to='/saved'>
							<SavedIcon />
						</StyledLink>
					</Li>
					<Li>
						<ThemeIcon />
					</Li>
				</Ul>
			</Nav>
		);
	}
}
