import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	width: 900px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const Ul = styled.ul`
	display: flex;
	justify-content: start;
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
	color: black;
`;
export const H1 = styled.h1`
	font-family: 'Zen Tokyo Zoo', cursive;
`;

export const Button = styled.button``;
