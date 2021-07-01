import React from 'react';
import axios from 'axios';
import { HistoryContainer, PostsContainer } from './PostPage.styled';
import { History, Post } from 'components';

class PostPage extends React.Component {
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
			this.setState({
				photos: [...this.state.photos, ...data],
				counts: 0,
				isLoading: false,
			});
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
		// window.addEventListener('scroll', this.infiniteScroll, 1000);
		this.getPhoto();
	}
	render() {
		const { photos } = this.state;
		return (
			<>
				<HistoryContainer>
					<History />
				</HistoryContainer>
				<PostsContainer>
					{photos.length > 0 &&
						photos.map((photo) => {
							return <Post key={photo.id} photo={photo} />;
						})}
				</PostsContainer>
			</>
		);
	}
}

export default PostPage;
