import React, { Component } from 'react';
import { withRouter } from 'react-router';
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

class SearchUsers extends Component {
	state = {
		users: [],
		isLoading: false,
		hasError: false,
		page: 1,
	};
	fetchNextPage = () => {
		const nextPage = this.state.page + 1;
		this.setState({ page: nextPage });
	};
	searchUsers = async () => {
		try {
			this.setState({ isLoading: true, hasError: false });
			const { data } = await axios.get(
				`https://api.unsplash.com/search/users?page=${this.state.page}&query=${this.props.match.params.query}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
			);
			this.setState({
				users: [...this.state.users, ...data.results],
				isLoading: false,
				hasError: false,
			});
		} catch (error) {
			this.setState({ isLoading: false, hasError: true });
			console.error(error);
		}
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.props.match.params.query !== prevProps.match.params.query) {
			this.setState({ users: [], page: 1 });
			this.searchUsers();
		} else if (this.state.page !== prevState.page) {
			this.searchUsers();
		}
	}
	componentDidMount() {
		this.searchUsers();
	}
	render() {
		const { users, isLoading, hasError } = this.state;
		return (
			<>
				{isLoading && !hasError && <h1>Loading......</h1>}
				{hasError && !isLoading && <h1>Error......</h1>}
				<StyledInfiniteScroll
					dataLength={this.state.users.length}
					next={this.fetchNextPage}
					hasMore={true}
					loader={<h4>Fetching More...</h4>}>
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
								<StyledLink className='button' to={`/users/${user.username}`}>
									<Button>View Profile</Button>
								</StyledLink>
							</UserContainer>
						);
					})}
				</StyledInfiniteScroll>
			</>
		);
	}
}

export default withRouter(SearchUsers);
