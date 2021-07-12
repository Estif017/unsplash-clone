import styled from 'styled-components';

export const SearchCollectionsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const P = styled.p`
	display: none;
	color: white;
	font-size: 24px;
	font-weight: bold;
`;
export const ImageContainer = styled.div`
	width: 265px;
	height: 265px;
	margin: 15px;
	position: relative;
	&:hover ${P} {
		display: block;
		position: absolute;
		top: 50%;
		right: 50%;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
`;
