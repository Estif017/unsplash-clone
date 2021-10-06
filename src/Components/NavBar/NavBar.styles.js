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
	max-width: 900px;
	width: 98%;
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
	justify-content: flex-end;
	align-items: center;
	width: 95%;
`;
export const Li = styled.li`
	list-style-type: none;
	cursor: pointer;

	&:first-child {
		width: 100%;
		margin: 10px;
	}
`;

export const Title = styled.h1`
	font-family: 'Zen Tokyo Zoo', cursive;
	width: 10%;
	margin-right: 1rem;
`;
