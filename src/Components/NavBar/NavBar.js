import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Ul, Li } from './NavBar.styles';
import { SearchForm } from '..';
import { ReactComponent as CameraIcon } from 'assets/camera.svg';
import { ReactComponent as SavedIcon } from 'assets/saved.svg';
import { ReactComponent as ThemeIcon } from 'assets/theme.svg';

export default class index extends Component {
	render() {
		return (
			<Nav>
				<Ul>
					<Li>
						<SearchForm />
					</Li>
					<Li>
						<Link to='/'>
							<CameraIcon />
						</Link>
					</Li>
					<Li>
						<Link to='/saved'>
							<SavedIcon />
						</Link>
					</Li>
					<Li>
						<ThemeIcon />
					</Li>
				</Ul>
			</Nav>
		);
	}
}
