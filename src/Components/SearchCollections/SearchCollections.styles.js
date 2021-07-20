import styled from 'styled-components';

export const SearchCollectionsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 100px 20px;
`;

export const P = styled.p`
	display: none;
	color: white;
	font-size: 24px;
	font-weight: bold;
`;
export const ImageContainer = styled.div`
	height: 400px;
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
