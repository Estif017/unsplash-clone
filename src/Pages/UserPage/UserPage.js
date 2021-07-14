import React, { Component } from 'react';
import axios from 'axios';
import { UserPost } from 'components';
import {
	UserProfileContainer,
	UserRecord,
	Record,
	UserPostsContainer,
} from './UserPage.styles';

export default class UserPage extends Component {
	state = {
		userProfile: null,
		isLoading: false,
		hasError: false,
	};
	fetchUserProfile = async () => {
		try {
			this.setState({ isLoading: true, hasError: false });
			const { data } = await axios.get(
				`https://api.unsplash.com/search/users?&query=${this.props.match.params.userId}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
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
		this.fetchUserProfile();
	}
	componentDidUpdate(prevProps) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.fetchUserProfile();
		}
	}
	render() {
		const { userProfile, isLoading, hasError } = this.state;
		return (
			<div>
				{isLoading && <h1>Loading ...</h1>}
				{hasError && <h1>Error Occurred</h1>}
				{userProfile && (
					<div>
						<UserProfileContainer>
							<img
								src={userProfile.profile_image.large}
								alt={userProfile.username}
							/>
							<h3>{userProfile.username}</h3>
							{userProfile.portfolio_url && <p>{userProfile.portfolio_url}</p>}
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
						<UserPostsContainer>
							<UserPost />
						</UserPostsContainer>
					</div>
				)}
			</div>
		);
	}
}
