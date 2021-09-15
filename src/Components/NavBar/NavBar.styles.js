import styled from 'styled-components';

export const Nav = styled.nav`
	overflow: hidden;
	position: fixed;
	top: 0;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: ${(props) => props.theme.secondary};
	height: 64px;
	z-index: 1;
`;
export const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const Li = styled.li`
	list-style-type: none;
	cursor: pointer;
`;

export const Title = styled.h1`
	font-family: 'Zen Tokyo Zoo', cursive;
	width: 10%;
	margin-right: 1rem;
`;
