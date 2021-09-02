import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { closeCarousel } from 'redux/appReducers/actions';
import { UserPost } from 'components';
import {
	UserProfileContainer,
	UserRecord,
	Record,
	Image,
	StyledA,
} from './UserPage.styles';
import { P, H1, H4 } from 'App.styles';

const UserPage = (props) => {
	const [userProfile, setUserProfile] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const { userId } = useParams();

	const dispatch = useDispatch(closeCarousel);

	const fetchUserProfile = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(
				`https://api.unsplash.com/search/users?&query=${userId}&per_page=15&client_id=${process.env.REACT_APP_ACCESS_KEY}`
			);
			setIsLoading(false);
			setHasError(false);
			setUserProfile(data.results[0]);
		} catch (error) {
			setIsLoading(false);
			setHasError(true);
			console.error(error);
		}
	};

	useEffect(() => {
		fetchUserProfile();
		dispatch(closeCarousel());
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		fetchUserProfile();
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
					<UserPost totalPhotos={userProfile.total_photos} {...props} />
				</>
			)}
		</>
	);
};

export default UserPage;
