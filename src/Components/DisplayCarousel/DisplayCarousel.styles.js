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
	max-width: 900px;
	width: 90%;
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
	height: 80vh;
	margin-bottom: 10px;
`;
export const CarouselContainer = styled.div`
	padding: 10px 5px;
`;

export const Container = styled.div`
	display: flex;
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

export const CreatedAt = styled.h4`
	color: #b3b3b3;
`;

export const DownloadBtn = styled.a`
	margin-left: 32%;
	cursor: pointer;
	border: none;
`;

export const Arrows = styled.div`
	width: 20px;
	height: 20px;
	border-color: #000;
	position: absolute;
	top: 94%;
	margin-top: -31px;
	cursor: pointer;
`;
export const NextArrowBtn = styled(Arrows)`
	border-bottom: 6px solid;
	border-left: 6px solid;
	transform: rotate(-135deg);
	right: 30px;
`;
export const PrevArrowBtn = styled(Arrows)`
	border-bottom: 6px solid;
	border-left: 6px solid;
	transform: rotate(45deg);
	right: 60px;
	z-index: 1;
`;
