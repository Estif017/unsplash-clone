import { ImageOverlay } from 'App.styles';
import styled from 'styled-components';

export const Collection = styled.div`
	position: relative;
	margin: 3px;
	width: ${({ height }) => height};
	@media (min-width: 500px) {
		margin: 5%;
	}
	@media (min-width: 900px) {
		margin: 10px;
	}
`;

export const TotalPhotos = styled.p`
	color: white;
	font-size: 24px;
	font-weight: bold;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Block = styled.div`
	height: 70%;
`;

export const Overlay = styled(ImageOverlay)`
	height: ${({ margin }) => (margin ? '98%' : '100%')};
`;
