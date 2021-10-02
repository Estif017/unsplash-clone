import styled from 'styled-components';

export const Cont = styled.div`
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	position: fixed;
	background-color: rgba(107, 112, 114, ${({ blur }) => blur});
	overflow-y: hidden;
	z-index: 9;
`;

export const View = styled.div`
	max-width: 800px;
	width: 90%;
	height: 88vh;
	display: ${(props) => props.display};
	background: ${(props) => props.theme.secondary};
	border-radius: 15px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
`;

export const ImageContainer = styled.div`
	height: 600px;
	margin-bottom: 10px;
	height: 70vh;
`;
export const CarouselContainer = styled.div`
	padding: 10px 5px;
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
	background-color: ${(props) =>
		props.theme.main === '#cfd2d6' ? props.theme.secondary : props.theme.main};
	position: fixed;
	top: 96%;
	right: 3%;
	padding: 0 1px;

	&:hover {
		background-color: ${(props) =>
			props.theme.main === '#cfd2d6'
				? props.theme.secondary
				: props.theme.main};
	}
`;

export const PrevArrowBtn = styled.div`
	background-color: ${(props) =>
		props.theme.main === '#cfd2d6' ? props.theme.secondary : props.theme.main};
	position: fixed;
	top: 96%;
	left: 90%;
	z-index: 1;
	padding-right: 3px;
	&:hover {
		background-color: ${(props) =>
			props.theme.main === '#cfd2d6'
				? props.theme.secondary
				: props.theme.main};
	}
	@media (max-width: 750px) {
		left: 88%;
	}
	@media (max-width: 550px) {
		left: 85%;
	}
`;
