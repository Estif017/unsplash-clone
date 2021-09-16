import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	userProfileSelector,
	loadingSelector,
	errorSelector,
} from 'redux/userReducer/userPageReducer';
import { fetchUserProfile } from 'redux/userReducer/userPageReducer/action';
import { closeCarousel } from 'redux/appReducers/actions';
import { UserPost } from 'Components';
import {
	UserProfileContainer,
	UserRecord,
	Record,
	Image,
	StyledA,
} from './UserPage.styles';
import { P, H1, H4 } from 'App.styles';

const UserPage = (props) => {
	const userProfile = useSelector(userProfileSelector);
	const isLoading = useSelector(loadingSelector);
	const hasError = useSelector(errorSelector);
	const { userId } = useParams();

	const dispatch = useDispatch(closeCarousel);

	useEffect(() => {
		dispatch(fetchUserProfile(userId));
		dispatch(closeCarousel());
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		dispatch(fetchUserProfile(userId));
		// eslint-disable-next-line
	}, [userId]);

	return (
		<>
			{isLoading && <H1>Loading ...</H1>}
			{hasError && <H1>Error Occurred</H1>}
			{userProfile && (
				<>
					<UserProfileContainer>
						<Image
							src={userProfile.profile_image.large}
							alt={userProfile.username}
						/>
						<H4>{userProfile.username}</H4>
						<P>{userProfile.bio}</P>
						{userProfile.portfolio_url && (
							<StyledA href={userProfile.portfolio_url} target='_blank'>
								<P>{userProfile.portfolio_url}</P>
							</StyledA>
						)}
						<UserRecord>
							<Record>
								<H1>{userProfile.total_photos}</H1>
								<P>Posts</P>
							</Record>
							<Record>
								<H1>{userProfile.total_likes}</H1>
								<P>Likes</P>
							</Record>
							<Record>
								<H1>{userProfile.total_collections}</H1>
								<P>Collections</P>
							</Record>
						</UserRecord>
					</UserProfileContainer>
					<UserPost />
				</>
			)}
		</>
	);
};

export default UserPage;
