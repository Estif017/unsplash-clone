import styled from 'styled-components';

export const Nav = styled.nav`
	max-width: 900px;
	width: 98%;
	overflow: hidden;
	position: fixed;
	top: 0;
	background: ${(props) => props.theme.secondary};
	z-index: 1;
	margin: 0 auto;
	@media (min-width: 550px) {
		width: 90%;
	}
	@media (min-width: 1600px) {
		width: 55%;
	}
`;
export const Ul = styled.ul`
	display: flex;
	align-items: center;
`;
export const Li = styled.li`
	list-style-type: none;
	cursor: pointer;
	margin-top: 5px;

	&:first-child {
		margin: 10px;
	}
	&:nth-child(2) {
		width: 100%;
		margin: 10px;
	}
`;

export const Title = styled.h1`
	font-family: 'Zen Tokyo Zoo', cursive;
	width: 10%;
	margin-right: 1rem;
`;
