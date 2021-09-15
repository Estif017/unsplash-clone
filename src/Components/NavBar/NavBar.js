import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { onSelector } from 'redux/appReducers';
import { toggleTheme } from 'redux/appReducers/actions';
import { SearchForm } from '..';
import { ReactComponent as CameraIcon } from 'assets/camera.svg';
import { ReactComponent as CameraIconActive } from 'assets/cameraActive.svg';
import { ReactComponent as SavedIcon } from 'assets/saved.svg';
import { ReactComponent as SavedIconActive } from 'assets/savedActive.svg';
import { ReactComponent as ThemeIcon } from 'assets/theme.svg';
import { Nav, Title, Li, Ul } from './NavBar.styles';
import { StyledLink, Button } from 'App.styles';

const NavBar = () => {
	const dispatch = useDispatch();
	const on = useSelector(onSelector);
	const { pathname } = useLocation();
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
						{pathname === '/collections' ? (
							<CameraIconActive />
						) : (
							<CameraIcon />
						)}
					</StyledLink>
				</Li>
				<Li>
					<StyledLink to='/saved/photos'>
						{pathname === '/saved/photos' ? <SavedIconActive /> : <SavedIcon />}
					</StyledLink>
				</Li>
				<Button onClick={() => dispatch(toggleTheme(on))}>
					<ThemeIcon />
				</Button>
			</Ul>
		</Nav>
	);
};

export default NavBar;
