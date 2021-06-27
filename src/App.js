import React from 'react';
import axios from 'axios';
import { History, NavBar, Post } from './Components';

import './App.css';
import {
	AppContainer,
	HistorysContainer,
	PostsContainer,
	GlobalStyle,
} from './App-styled';

export default class App extends React.Component {
	state = {
		photos: [],
		isLoading: false,
		hasError: false,
		counts: 5,
	};
	getPhoto = async () => {
		try {
			this.setState({ isLoading: true });
			const { data } = await axios.get(
				`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=${this.state.counts}`
			);
			this.setState({ photos: [...this.state.photos, ...data], counts: 0 });
		} catch (error) {
			this.setState({ isLoading: false, hasError: true });
			console.error(error);
		}
	};
	infiniteScroll = () => {
		// End of the document reached?
		if (
			Math.round(window.innerHeight + document.documentElement.scrollTop) ===
			document.documentElement.offsetHeight
		) {
			console.log('scrolled');
			let newPage = this.state.counts;
			newPage++;
			this.setState({
				counts: newPage,
			});
			this.getPhoto();
		}
	};
	window;
	componentDidMount() {
		window.addEventListener('scroll', this.infiniteScroll, 1000);
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
							this.state.photos.map((photo) => {
								return <Post key={photo.id} photo={photo} />;
							})}
					</PostsContainer>
				</AppContainer>
			</>
		);
	}
}
