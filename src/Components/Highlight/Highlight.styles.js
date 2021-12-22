import { Button, TotalLikes } from 'App.styles';
import styled from 'styled-components';

export const Arrows = styled.div`
	width: 48px;
	height: 48px;
	border-color: #000;
	position: absolute;
	top: 50%;
	margin-top: -31px;
	cursor: pointer;
	display: none;
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

export const HighlightContainer = styled.div`
	margin: 100px 0 30px 0;
	width: ${({ width }) => width};

	&:hover ${Arrows} {
		display: block;
	}
`;

export const Delete = styled(Button)`
	display: none;
	position: absolute;
	top: 0;
	left: 5;
	font-size: 32px;
	color: #000;
`;

export const ImageOverlay = styled.div`
	position: absolute;
	background: #fff;
	opacity: 0.5;
	height: 100%;
	width: 100%;
	top: 0;
	display: none;
	text-align: center;
	cursor: pointer;
`;

export const CollectionsContainer = styled.div`
	height: 234px;
	padding: 0 10px;
	position: relative;

	&:hover ${Delete} {
		display: block;
	}
	&:hover ${ImageOverlay} {
		display: block;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	border-radius: ${({ borderRadius }) => borderRadius};
	cursor: pointer;
	object-fit: cover;
`;

export const Remove = styled(Button)`
	position: absolute;
	top: 0;
	left: 0;
	font-size: 32px;
	color: white;
`;

export const CollectionTitle = styled(TotalLikes)`
	width: 100%;
	text-align: center;
`;

export const Content = styled.div`
	max-width: 892px;
	width: 90%;
	margin: 10px auto;
	height: 100vh;
	@media (min-width: 750px) {
		width: 75%;
	}
	@media (min-width: 1150px) {
		width: 60%;
	}
`;

export const View = styled.div`
	width: 100%;
	height: 100%;
	display: ${(props) => props.display};
	background-color: rgba(0, 0, 0, 0.6);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
`;

export const AddBtn = styled(Button)`
	position: absolute;
	bottom: 18%;
	left: 35%;
	background: rgba(0, 0, 0, 0.3);
`;

export const FormContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 1px solid black;
	background: rgba(0, 0, 0, 0.8);
	display: ${(props) => props.formDisplay};
	width: 80%;
	height: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const SearchFormContainer = styled.div`
	width: 80%;
`;

export const TotalPhotos = styled.h3`
	font-weight: 900;
	margin-top: 50%;
`;
