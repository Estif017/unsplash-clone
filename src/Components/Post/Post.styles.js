import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostContainer = styled.div`
	margin: 20px auto;
	background: #fafafa;
	border: 2px solid #fafafa;
`;

export const PostHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
`;

export const HeaderStatus = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const Image = styled.img`
	width: 100%;
`;

export const StyledLink = styled(Link)`
	cursor: pointer;
	color: black;
	text-decoration: none;
`;

export const Container = styled.div`
	.Like-star& {
		display: flex;
		gap: 15px;
		margin: 15px 0;
	}
`;

export const More = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	margin-right: 10px;
`;

export const H4 = styled.h4``;
export const H1 = styled.h1``;
export const P = styled.p`
	font-size: 18px;
	margin-bottom: 3px;
`;
