import styled, { css } from 'styled-components';
export const Input = styled.input`
	width: 40rem;
	padding: 10px;
	outline: none;
	border: ${(props) => props.theme.secondary};
	background: #ffffff;
	${({ formDisplay }) =>
		formDisplay &&
		css`
			width: 100%;
			border-bottom: 3px solid white;
			background: none;
			color: #ffffff;
		`}
`;
