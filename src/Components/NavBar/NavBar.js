import React, { Component } from 'react';
import { Nav, UL, LI } from './NavBar-Styled';
import { SearchForm } from '..';
import { ReactComponent as CameraIcon } from '../../assets/camera.svg';
import { ReactComponent as SavedIcon } from '../../assets/Saved.svg';
import { ReactComponent as ThemeIcon } from '../../assets/Theme.svg';

export default class index extends Component {
	render() {
		return (
			<Nav>
				<UL>
					<LI>
						<SearchForm />
					</LI>
					<LI>
						<CameraIcon />
					</LI>
					<LI>
						<SavedIcon />
					</LI>
					<LI>
						<ThemeIcon />
					</LI>
				</UL>
			</Nav>
		);
	}
}
