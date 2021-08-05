import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Collection = styled.div`
	position: relative;
	background-color: ${(props) => props.background};
	&.page-container {
		margin: 10px;
	}
	&.search-container {
		width: 280px;
		height: 280px;
	}
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
	&.height {
		height: 280px;
	}
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
	background-color: rgba(0, 0, 0, 0.6);
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

export const P = styled.p`
	color: white;
	font-size: 24px;
	font-weight: bold;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const More = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	position: absolute;
	bottom: 5%;
	right: 5%;
`;

export const Title = styled.p`
	color: white;
	font-size: 18px;
	font-weight: bold;
	position: absolute;
	bottom: 5%;
	left: 5%;
`;
