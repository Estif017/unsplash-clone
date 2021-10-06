import styled from 'styled-components';

export const ImageContainer = styled.div`
	height: 98vh;
	max-height: 100vh;
	padding: 5px;
	position: relative;
`;

export const Arrows = styled.div`
	width: 48px;
	height: 48px;
	border-color: #000;
	position: absolute;
	top: 50%;
	margin-top: -31px;
	cursor: pointer;
	color: white;
`;
export const NextArrowBtn = styled(Arrows)`
	border-bottom: 6px solid;
	border-left: 6px solid;
	transform: rotate(-135deg);
	right: -40px;
`;
export const PrevArrowBtn = styled(Arrows)`
	border-bottom: 6px solid;
	border-left: 6px solid;
	transform: rotate(45deg);
	left: -40px;
`;
