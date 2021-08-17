import { Button } from 'App.styles';
import styled from 'styled-components';

export const HighlightContainer = styled.div`
	margin-top: 75px;
	width: ${({ width }) => width};
`;
export const Container = styled.div`
	height: 100%;
	border-radius: 15px;
	cursor: pointer;
`;

export const CollectionsContainer = styled.div`
	width: 200px;
	height: 300px;
	padding: 10px;
	position: relative;
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

export const AddBtn = styled(Button)`
	position: absolute;
	bottom: 18%;
	left: 35%;
	background: rgba(0, 0, 0, 0.3);
`;

export const Remove = styled(Button)`
	position: absolute;
	top: 0;
	left: 0;
	font-size: 32px;
	color: white;
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
