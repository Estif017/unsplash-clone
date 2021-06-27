import React from 'react';
import axios from 'axios';
import { History, NavBar } from './Components';
import { ReactComponent as MoreIcon } from './assets/MoreIcon.svg';
import { ReactComponent as Likes } from './assets/Likes.svg';
import { ReactComponent as Star } from './assets/Star.svg';
import './App.css';
import {
	AppContainer,
	HistorysContainer,
	PostContainer,
	PostsContainer,
	More,
	HeaderStatus,
	GlobalStyle,
} from './App-styled';

export default class App extends React.Component {
	state = {
		photos: [],
		isLoading: false,
		hasError: false,
	};
	getPhoto = async () => {
		try {
			this.setState({ isLoading: true });
			const { data } = await axios.get(
				`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=5`
			);
			this.setState({ photos: [...this.state.photos, data] });
		} catch (error) {
			this.setState({ isLoading: false, hasError: true });
			console.error(error);
		}
	};
	componentDidMount() {
		this.getPhoto();
	}
	render() {
		return (
			<>
				<GlobalStyle />
				<AppContainer>
					<NavBar />
					<HistorysContainer>
						<History />
					</HistorysContainer>
					<PostsContainer>
						{this.state.photos.length > 0 &&
							this.state.photos[0].map((photo) => {
								return (
									<PostContainer>
										<div className='post-header'>
											<HeaderStatus>
												<div className='profile-image-container'>
													<img
														src={photo.user.profile_image.medium}
														alt='user-profile'
														className='profile-image'
													/>
												</div>
												<div className='status'>
													<h4>{photo.user.name}</h4>
													<h4 className='posted-time'>12 hour ago</h4>
												</div>
											</HeaderStatus>
											<More>
												<MoreIcon />
											</More>
										</div>

										<p>{photo.user.bio}</p>
										<div className='image-container'>
											<img src={photo.urls.regular} alt='posted-img' />
										</div>
										<div className='Like-star'>
											<Likes />
											<Star />
										</div>
									</PostContainer>
								);
							})}
					</PostsContainer>
				</AppContainer>
			</>
		);
	}
}
