import React, { Component } from 'react';
import { Nav, UL, LI, Input } from './NavBar-Styled';
import { ReactComponent as CameraIcon } from '../../assets/camera.svg';
import { ReactComponent as SavedIcon } from '../../assets/Saved.svg';
import { ReactComponent as ThemeIcon } from '../../assets/Theme.svg';

export default class index extends Component {
	render() {
		return (
			<Nav>
				<UL>
					<LI>
						<Input placeholder='search...' />
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
