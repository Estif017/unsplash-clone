import { Button, TotalLikes } from 'App.styles';
import styled from 'styled-components';

export const HighlightContainer = styled.div`
	margin-top: 60px;
	width: ${({ width }) => width};
`;

export const Remove = styled(Button)`
	position: absolute;
	top: 0;
	left: 0;
	font-size: 32px;
	color: white;
`;

export const Delete = styled(Button)`
	display: none;
	position: absolute;
	top: 0;
	left: 5;
	font-size: 32px;
	color: white;
`;

export const CollectionsContainer = styled.div`
	width: 160px;
	height: 234px;
	padding: 0 10px;
	position: relative;

	&:hover ${Delete} {
		display: block;
	}
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

export const NextArrowBtn = styled.div`
	background: ${(props) =>
		props.theme.main === '#cfd2d6' ? props.theme.secondary : props.theme.main};
	&:hover {
		background: ${(props) =>
			props.theme.main === '#cfd2d6'
				? props.theme.secondary
				: props.theme.main};
	}
`;
export const PrevArrowBtn = styled.div`
	background: ${(props) =>
		props.theme.main === '#cfd2d6' ? props.theme.secondary : props.theme.main};
	&:hover {
		background: ${(props) =>
			props.theme.main === '#cfd2d6'
				? props.theme.secondary
				: props.theme.main};
	}
`;
