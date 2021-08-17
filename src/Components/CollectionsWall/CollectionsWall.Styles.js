import styled from 'styled-components';

export const Collection = styled.div`
	position: relative;
	margin: ${({ margin }) => margin};
	height: ${({ height }) => height};
	width: ${({ height }) => height};
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
