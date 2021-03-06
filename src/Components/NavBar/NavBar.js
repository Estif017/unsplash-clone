import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { onSelector } from 'redux/appReducers';
import { toggleTheme } from 'redux/appReducers/actions';
import { SearchForm } from '..';
import { ReactComponent as CameraIcon } from 'assets/camera.svg';
import { ReactComponent as CameraIconActive } from 'assets/cameraActive.svg';
import { ReactComponent as SavedIcon } from 'assets/Saved.svg';
import { ReactComponent as SavedIconActive } from 'assets/savedActive.svg';
import { ReactComponent as ThemeIcon } from 'assets/Theme.svg';
import { Nav, Title, Li, Ul } from './NavBar.styles';
import { StyledLink, Button } from 'App.styles';

const NavBar = () => {
	const dispatch = useDispatch();
	const on = useSelector(onSelector);
	const { pathname } = useLocation();
	return (
		<Nav>
			<Ul>
				<Li>
					<StyledLink to='/'>
						<Title>Unsplash</Title>
					</StyledLink>
				</Li>
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
				<Li>
					<Button onClick={() => dispatch(toggleTheme(on))}>
						<ThemeIcon />
					</Button>
				</Li>
			</Ul>
		</Nav>
	);
};

export default NavBar;
