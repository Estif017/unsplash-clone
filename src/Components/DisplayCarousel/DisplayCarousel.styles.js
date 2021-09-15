import styled from 'styled-components';

export const Cont = styled.div`
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	position: fixed;
	background-color: rgba(107, 112, 114, 0.2);
	overflow-y: hidden;
	z-index: 9;
`;

export const View = styled.div`
	width: 800px;
	height: 720px;
	display: ${(props) => props.display};
	background: ${(props) => props.theme.secondary};
	border-radius: 15px;
	position: fixed;
	top: 55%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
`;

export const ImageContainer = styled.div`
	height: 600px;
	margin-bottom: 10px;
`;
export const CarouselContainer = styled.div`
	padding: 5px;
`;

export const Container = styled.div`
	display: flex;
	margin-bottom: 10px;
`;

export const CarouselHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
`;
export const HeaderStatus = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const NextArrowBtn = styled.div`
	background-color: black;
	position: fixed;
	top: 97%;
	right: 3%;
	&:hover {
		background-color: black;
	}
`;

export const PrevArrowBtn = styled.div`
	background-color: black;
	position: fixed;
	top: 97%;
	left: 90%;
	z-index: 1;
	&:hover {
		background-color: black;
	}
`;
