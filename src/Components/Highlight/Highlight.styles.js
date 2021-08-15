import styled from 'styled-components';

export const HighlightContainer = styled.div``;
export const Container = styled.div`
	background: ${(props) => props.theme.secondary};
	padding: 1rem;
`;

export const CollectionsContainer = styled.div`
	width: 160px;
	height: 300px;
	padding: 10px;
	position: relative;
	&.add {
	}
`;

export const AddBtn = styled.button`
	border: none;
	outline: none;
	position: absolute;
	bottom: 18%;
	left: 35%;
	background: rgba(0, 0, 0, 0.3);
	cursor: pointer;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 15px;
`;

export const ImageOverlay = styled.div`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	width: 90%;
	height: 93%;
	margin-top: 10px;
	margin-left: 10px;
	opacity: 0;
	transition: opacity 0.5s;
	&:hover {
		opacity: 1;
	}
`;

export const Content = styled.div`
	width: 892px;
	height: 812px;
	margin: 10px auto;
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

export const Remove = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	position: absolute;
	top: 0%;
	left: 0%;
	font-size: 18px;
	color: white;
	&.close {
		top: 0;
		left: 0;
		font-size: 32px;
	}
	&.form {
		left: 99%;
	}
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
