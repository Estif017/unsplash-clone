import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { UsersStyle } from './SearchUsers.styles';

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
			<UsersStyle.SearchUsersContainer>
				{isLoading && !hasError && <h1>Loading......</h1>}
				{hasError && !isLoading && <h1>Error......</h1>}
				<UsersStyle.StyledInfiniteScroll
					dataLength={this.state.users.length}
					next={this.fetchNextPage}
					hasMore={true}
					loader={<h4>Fetching More...</h4>}>
					{users.map((user) => {
						return (
							<UsersStyle.UserContainer key={user.id}>
								<UsersStyle.UserProfile>
									<UsersStyle.ProfilePhotoContainer>
										<UsersStyle.StyledLink to={`/users/${user.username}`}>
											<UsersStyle.ProfilePhoto
												src={user.profile_image.medium}
											/>
										</UsersStyle.StyledLink>
									</UsersStyle.ProfilePhotoContainer>
									<UsersStyle.UserDescription>
										<UsersStyle.StyledLink to={`/users/${user.username}`}>
											<UsersStyle.Name>{user.name}</UsersStyle.Name>
										</UsersStyle.StyledLink>
										<UsersStyle.StyledLink to={`/users/${user.username}`}>
											<UsersStyle.UserName>
												@{user.username}
											</UsersStyle.UserName>
										</UsersStyle.StyledLink>
									</UsersStyle.UserDescription>
								</UsersStyle.UserProfile>
								<UsersStyle.SamplePhotos>
									{user.photos.map((photo) => (
										<UsersStyle.ImageContainer>
											<UsersStyle.StyledLink to={`/users/${user.username}`}>
												<UsersStyle.Image src={photo.urls.small} />
											</UsersStyle.StyledLink>
										</UsersStyle.ImageContainer>
									))}
								</UsersStyle.SamplePhotos>
								<UsersStyle.StyledLink to={`/users/${user.username}`}>
									<UsersStyle.Button>View Profile</UsersStyle.Button>
								</UsersStyle.StyledLink>
							</UsersStyle.UserContainer>
						);
					})}
				</UsersStyle.StyledInfiniteScroll>
			</UsersStyle.SearchUsersContainer>
		);
	}
}

export default withRouter(SearchUsers);
