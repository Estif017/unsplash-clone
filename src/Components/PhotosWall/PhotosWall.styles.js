import styled from 'styled-components';

export const PhotosContainer = styled.div`
	overflow: hidden;
`;

export const ImageContainer = styled.div`
	position: relative;
	margin: 10px;
	background-color: ${(props) => props.background};
	overflow: hidden;
	cursor: pointer;
`;

export const Container = styled.div`
	height: 70%;
`;
