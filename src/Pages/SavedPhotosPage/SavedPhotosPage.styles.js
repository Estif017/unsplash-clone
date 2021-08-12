import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 80px;
`;
export const ImageContainer = styled.div`
	margin: 10px;
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
