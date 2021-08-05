import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

export const PostContainer = styled.div`
	background: ${(props) => props.theme.secondary};
	background: #ffffff;
	border: 2px solid ${(props) => props.theme.secondary};
	padding: 1rem;
	margin: 20px 0;
`;

export const PostHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const HeaderStatus = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const LazyLoadStyles = styled(LazyLoad)`
	height: 500px;
	margin-top: 5px;
`;
export const Image = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 15px;
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
		margin-top: 10px;
	}
`;

export const More = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	margin-right: 10px;
`;

export const H4 = styled.h4`
	color: ${(props) => props.theme.main};
`;
export const H1 = styled.h1``;
export const P = styled.p`
	font-size: 18px;
	margin-bottom: 3px;
`;
