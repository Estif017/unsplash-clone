import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
	color: black;
	text-decoration: none;
`;

const StyledInfiniteScroll = styled(InfiniteScroll)`
	display: flex;
	flex-wrap: wrap;
`;
const SearchUsersContainer = styled.div``;
const UserContainer = styled.div`
	border: 1px solid #d1d1d1;
	width: 286px;
	padding: 10px;
	margin-right: 20px;
	margin-bottom: 20px;

	&:nth-child(3n + 3) {
		margin-right: 0;
	}
`;

const UserProfile = styled.div`
	display: flex;
	gap: 20px;
`;

const ProfilePhotoContainer = styled.div``;

const ProfilePhoto = styled.img`
	border-radius: 50%;
`;

const UserDescription = styled.div`
	margin-top: 10px;
`;
const Name = styled.p`
	font-size: 24px;
`;
const UserName = styled.p``;

const SamplePhotos = styled.div`
	height: 100px;
	display: flex;
	justify-content: space-between;
	margin: 20px 0;
`;

const ImageContainer = styled.div`
	width: 80px;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
`;

const Button = styled.button`
	color: #767676;
	border-color: #d1d1d1;
	background: #fff;
	width: 100%;
	padding: 10px;
	cursor: pointer;
`;

export const UsersStyle = {
	StyledLink,
	StyledInfiniteScroll,
	SearchUsersContainer,
	UserContainer,
	UserProfile,
	ProfilePhotoContainer,
	ProfilePhoto,
	UserDescription,
	Name,
	UserName,
	SamplePhotos,
	ImageContainer,
	Image,
	Button,
};
