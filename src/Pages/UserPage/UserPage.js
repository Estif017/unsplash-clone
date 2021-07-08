import React, { Component } from 'react';
import axios from 'axios';
import { UserPost } from 'components';
import {
	UserProfileContainer,
	ImageHighlightContainer,
	Image,
	UserRecord,
	Record,
	UserPostsContainer,
} from './UserPage.styles';

export default class UserPage extends Component {
	state = {
		userProfile: {},
		isLoading: false,
		hasError: false,
	};
	fetchUserProfile = async (user) => {
		try {
			this.setState({ isLoading: true, hasError: false });
			const { data } = await axios.get(
				`https://api.unsplash.com/search/users?&query=${user}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
			);

			this.setState({
				userProfile: data.results[0],
				isLoading: false,
				hasError: false,
			});
		} catch (error) {
			this.setState({ isLoading: false, hasError: true });
			console.error(error);
		}
	};

	componentDidMount() {
		this.fetchUserProfile(this.props.match.params.id);
	}
	componentDidUpdate(prevProps) {
		if (this.props.match.params.id !== prevProps.match.params.id) {
			this.fetchUserProfile(this.props.match.params.id);
		}
	}
	render() {
		const { userProfile, isLoading, hasError } = this.state;
		return (
			<div>
				{(isLoading && <h1>Loading ...</h1>) ||
					(hasError && <h1>Error Occurred</h1>) ||
					(Object.keys(userProfile).length && (
						<>
							<UserProfileContainer>
								<img
									src={userProfile.profile_image.large}
									alt={userProfile.username}
								/>
								<h3>{userProfile.username}</h3>
								{userProfile.portfolio_url && (
									<p>{userProfile.portfolio_url}</p>
								)}
								<UserRecord>
									<Record>
										<h1>{userProfile.total_photos}</h1>
										<p>Posts</p>
									</Record>
									<Record>
										<h1>{userProfile.total_likes}</h1>
										<p>Likes</p>
									</Record>
									<Record>
										<h1>{userProfile.total_collections}</h1>
										<p>Collections</p>
									</Record>
								</UserRecord>
							</UserProfileContainer>
							<ImageHighlightContainer>
								{userProfile.photos.map((photo) => {
									return (
										<Image key={photo.id} src={photo.urls.regular} alt='img' />
									);
								})}
							</ImageHighlightContainer>
							<UserPostsContainer>
								<UserPost user={userProfile} />
							</UserPostsContainer>
						</>
					))}
			</div>
		);
	}
}
