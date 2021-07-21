import styled from 'styled-components';

export const SavedCollectionsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
`;
export const ImageContainer = styled.div`
	position: relative;
	&:hover .remove {
		display: block;
	}
`;
export const Image = styled.img`
	width: 100%;
	cursor: pointer;
`;

export const Button = styled.button`
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	cursor: pointer;
`;
