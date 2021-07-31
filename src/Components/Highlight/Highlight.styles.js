import styled from 'styled-components';

export const HighlightContainer = styled.div`
	position: relative;
`;
export const Container = styled.div``;

export const CollectionsContainer = styled.div`
	width: 100px;
	height: 300px;
	padding: 20px;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	cursor: pointer;
`;

export const View = styled.div`
	display: ${(props) => props.display};
	position: absolute;
	border: 1px solid red;
	top: 20%;
	width: 900px;
	height: 600px;
`;
