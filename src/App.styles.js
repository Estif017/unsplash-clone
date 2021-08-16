import styled, { createGlobalStyle, css } from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    width: 55%;
	margin: 0 auto;
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.main};
}
`;

export const P = styled.p`
	font-size: 18px;
	margin-bottom: 3px;
	color: ${({ color }) => color};
`;

export const H1 = styled.h1`
	font-size: 24px;
`;

export const H4 = styled.h4`
	color: ${(props) => props.theme.main};
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${(props) => props.theme.main};
`;

export const Image = styled.img`
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => (height ? height : '100%')};
	border-radius: ${({ borderRadius }) => borderRadius};
	cursor: pointer;
`;

export const Button = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	margin-right: 10px;
`;

export const ImageOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${({ bgColor }) => bgColor};
	${({ hover }) =>
		hover &&
		css`
			opacity: 0;
			transition: opacity 0.5s;
			&:hover {
				opacity: 1;
			}
		`}

	${({ highlight }) =>
		highlight &&
		css`
			width: 92%;
			height: 93%;
			margin-top: 10px;
			margin-left: 10px;
			border-radius: 15px;
		`}
`;

export const Container = styled.div``;
