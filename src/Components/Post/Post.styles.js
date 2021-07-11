import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostContainer = styled.div`
	position: relative;
	width: 90%;
	margin: 20px auto;
`;

export const StyledLink = styled(Link)`
	cursor: pointer;
	color: black;
	text-decoration: none;
`;

export const More = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	border: none;
	outline: none;
`;

export const HeaderStatus = styled.div`
	display: flex;
`;
