import styled from 'styled-components';

export const Nav = styled.nav`
	overflow: hidden;
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: ${(props) => props.theme.secondary};
	z-index: 1;
`;
export const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
`;
export const Li = styled.li`
	list-style-type: none;
	cursor: pointer;
`;

export const Title = styled.h1`
	font-family: 'Zen Tokyo Zoo', cursive;
	width: 10%;
	margin-right: 3rem;
`;
