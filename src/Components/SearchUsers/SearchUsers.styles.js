import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
	color: black;
	text-decoration: none;
`;

export const StyledInfiniteScroll = styled(InfiniteScroll)`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
`;
export const SearchUsersContainer = styled.div``;
export const UserContainer = styled.div`
	border: 1px solid #d1d1d1;
`;

export const UserProfile = styled.div`
	display: flex;
	gap: 20px;
`;

export const ProfilePhotoContainer = styled.div`
	margin: 10px;
`;

export const ProfilePhoto = styled.img`
	border-radius: 50%;
`;

export const UserDescription = styled.div`
	margin-top: 10px;
`;
export const Name = styled.p`
	font-size: 24px;
`;
export const UserName = styled.p``;

export const SamplePhotos = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	margin: 20px 0;
`;

export const ImageContainer = styled.div`
	height: 150px;
	/* width: 80px; */
`;
export const Image = styled.img`
	width: 100%;
	height: 100%;
`;

export const Button = styled.button`
	color: #767676;
	border-color: #d1d1d1;
	background: #fff;
	width: 100%;
	padding: 10px;
	cursor: pointer;
`;
