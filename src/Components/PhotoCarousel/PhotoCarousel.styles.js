import styled from 'styled-components';
import { Button, StyledLink } from 'App.styles';

export const ImageContainer = styled.div`
	width: 892px;
	height: 812px;
	padding: 5px;
	position: relative;
	z-index: 5;
`;

export const UserLink = styled(StyledLink)`
	padding: 5px;
	display: flex;
	align-items: center;
	gap: 5px;
`;

export const Creator = styled.p`
	color: white;
	font-size: 18px;
	font-weight: bold;
`;

export const SaveBtn = styled(Button)`
	position: absolute;
	bottom: 5%;
	right: 5%;
`;

export const TotalLikes = styled(Creator)`
	color: white;
	font-size: 18px;
	font-weight: bold;
	position: absolute;
	bottom: 5%;
	left: 5%;
`;
