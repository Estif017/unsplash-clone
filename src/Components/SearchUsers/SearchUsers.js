import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	searchUsersSelector,
	loadingSelector,
	errorSelector,
	hasMoreSelector,
	totalSelector,
} from 'redux/searchReducers/searchUsersReducer';
import {
	searchUsers,
	doneSearching,
	resetSearchUsers,
} from 'redux/searchReducers/searchUsersReducer/action';
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

const SearchUsers = () => {
	const users = useSelector(searchUsersSelector);
	const isLoading = useSelector(loadingSelector);
	const hasError = useSelector(errorSelector);
	const hasMore = useSelector(hasMoreSelector);
	const total = useSelector(totalSelector);
	const { query } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(searchUsers(query));
		setTimeout(() => {
			if (!total || total <= 15) {
				dispatch(doneSearching());
			}
		}, 3000);
		return dispatch(resetSearchUsers());
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{isLoading && !hasError && !users && <h1>Loading......</h1>}
			{hasError && !isLoading && !users && <h1>Error......</h1>}
			<StyledInfiniteScroll
				dataLength={users.length}
				next={() => dispatch(searchUsers())}
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
