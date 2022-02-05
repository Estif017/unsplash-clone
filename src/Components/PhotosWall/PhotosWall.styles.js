import styled from 'styled-components';

export const PhotosContainer = styled.div`
	overflow: hidden;
`;

export const ImageContainer = styled.div`
	position: relative;
	margin: 3px;
	overflow: hidden;
	cursor: pointer;
	border-radius: 15px;
	@media (min-width: 500px) {
		margin: 5%;
	}
	@media (min-width: 900px) {
		margin: 10px;
	}
`;

export const Container = styled.div`
	height: 70%;
`;
