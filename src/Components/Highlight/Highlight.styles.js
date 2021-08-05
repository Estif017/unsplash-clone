import styled from 'styled-components';

export const HighlightContainer = styled.div``;
export const Container = styled.div`
	background: ${(props) => props.theme.secondary};
	padding: 1rem;
`;

export const CollectionsContainer = styled.div`
	width: 160px;
	height: 300px;
	padding: 10px;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	cursor: pointer;
`;

export const View = styled.div`
	width: 900px;
	height: 600px;
	display: ${(props) => props.display};
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
`;

export const Button = styled.button`
	position: absolute;
	cursor: pointer;
	background: white;
	border: none;
	outline: none;
	font-size: 18px;
	padding: 2px;
	font-weight: bold;
	z-index: 10;
`;
