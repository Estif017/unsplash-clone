import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PhotosContainer = styled.div`
	overflow: hidden;
`;

export const ImageContainer = styled.div`
	position: relative;
	margin: 10px;
	background-color: ${(props) => props.background};
	overflow: hidden;
	cursor: pointer;
`;

export const StyledLink = styled(Link)`
	cursor: pointer;
	color: black;
	text-decoration: none;
	&.profile_pic {
		padding: 5px;
		display: flex;
		align-items: center;
		gap: 5px;
	}
`;

export const Image = styled.img`
	width: 100%;
	cursor: pointer;
	&.profile {
		border-radius: 50%;
		width: 50px;
		height: 50px;
	}
`;

export const ImageOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.3);
	width: 100%;
	height: 100%;
	opacity: 0;
	transition: opacity 0.5s;
	&:hover {
		opacity: 1;
	}
`;

export const Creator = styled.p`
	color: white;
	font-size: 18px;
	font-weight: bold;
`;

export const More = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	position: absolute;
	bottom: 5%;
	right: 5%;
`;

export const P = styled.p`
	color: white;
	font-size: 18px;
	font-weight: bold;
	position: absolute;
	bottom: 5%;
	left: 5%;
`;
