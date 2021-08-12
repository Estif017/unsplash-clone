import React, { Component } from 'react';
import axios from 'axios';
import { UserPost } from 'components';
import {
	UserProfileContainer,
	UserRecord,
	Record,
	Image,
	H1,
	H3,
	StyledA,
} from './UserPage.styles';
import { P } from 'components/Post/Post.styles';

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
							<H3>{userProfile.username}</H3>
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
						<UserPost {...this.props} />
					</>
				)}
			</>
		);
	}
}
