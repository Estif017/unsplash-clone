import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	position: sticky;
	top: 0;
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: ${(props) => props.theme.secondary};
`;
export const Ul = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 85%;
	gap: 5px;
`;
export const Li = styled.li`
	list-style-type: none;
	cursor: pointer;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${(props) => props.theme.main};
`;
export const H1 = styled.h1`
	font-family: 'Zen Tokyo Zoo', cursive;
`;

export const Button = styled.button`
	background: none;
	outline: none;
	border: none;
	cursor: pointer;
`;
