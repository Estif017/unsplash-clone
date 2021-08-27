import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	StyledLink,
	StyledInfiniteScroll,
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
} from './SearchUsers.styles';
import { useParams } from 'react-router-dom';

const SearchUsers = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const { query } = useParams();

	const searchUsers = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(
				`https://api.unsplash.com/search/users?page=${page}&query=${query}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
			);
			setUsers([...users, ...data.results]);
			setPage(page + 1);
			setIsLoading(false);
			setHasError(false);
			setTotal(data.total);
		} catch (error) {
			setIsLoading(false);
			setHasError(true);
			console.error(error);
		}
	};

	useEffect(() => {
		searchUsers();
		setTimeout(() => {
			if (!total || total <= 15) {
				setHasMore(false);
			}
		}, 3000);
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{isLoading && !hasError && !users && <h1>Loading......</h1>}
			{hasError && !isLoading && !users && <h1>Error......</h1>}
			<StyledInfiniteScroll
				dataLength={users.length}
				next={searchUsers}
				hasMore={hasMore}
				loader={<h4>Fetching More...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						{total > 0 ? (
							<b>Yay! You have seen it all</b>
						) : (
							<h1>No Results Found ☹</h1>
						)}
					</p>
				}>
				{users.map((user) => {
					return (
						<UserContainer key={user.id}>
							<UserProfile>
								<ProfilePhotoContainer>
									<StyledLink to={`/users/${user.username}`}>
										<ProfilePhoto src={user.profile_image.medium} />
									</StyledLink>
								</ProfilePhotoContainer>
								<UserDescription>
									<StyledLink to={`/users/${user.username}`}>
										<Name>{user.name}</Name>
									</StyledLink>
									<StyledLink to={`/users/${user.username}`}>
										<UserName>@{user.username}</UserName>
									</StyledLink>
								</UserDescription>
							</UserProfile>
							<SamplePhotos>
								{user.photos.map((photo) => (
									<ImageContainer key={photo.id}>
										<StyledLink to={`/users/${user.username}`}>
											<Image src={photo.urls.small} />
										</StyledLink>
									</ImageContainer>
								))}
							</SamplePhotos>
							<StyledLink to={`/users/${user.username}`}>
								<Button>View Profile</Button>
							</StyledLink>
						</UserContainer>
					);
				})}
			</StyledInfiniteScroll>
		</>
	);
};

export default SearchUsers;
