import { Button } from 'App.styles';
import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 100px;
`;

export const Remove = styled(Button)`
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	font-size: 32px;
	color: white;
`;

export const ImageContainer = styled.div`
	margin: 3px;
	position: relative;
	&:hover ${Remove} {
		display: block;
	}
	@media (min-width: 500px) {
		margin: 5%;
	}
	@media (min-width: 900px) {
		margin: 10px;
	}
`;
export const Image = styled.img`
	width: 100%;
	cursor: pointer;
	border-radius: 15px;
`;
