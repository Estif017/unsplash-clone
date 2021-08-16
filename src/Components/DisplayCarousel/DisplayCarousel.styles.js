import { Button } from 'App.styles';
import styled from 'styled-components';

export const Content = styled.div`
	width: 892px;
	height: 812px;
	margin: 10px auto;
`;

export const View = styled.div`
	width: 100%;
	height: 100%;
	display: ${(props) => props.display};
	background-color: rgba(0, 0, 0, 0.1);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
`;

export const Remove = styled(Button)`
	position: absolute;
	top: 0;
	left: 0;
	font-size: 32px;
	color: white;
`;
