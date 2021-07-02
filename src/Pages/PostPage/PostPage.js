import React from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
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
				isLoading: false,
			});
		} catch (error) {
			this.setState({ isLoading: false, hasError: true });
			console.error(error);
		}
	};
	componentDidMount() {
		this.getPhoto();
	}
	render() {
		const { photos } = this.state;
		return (
			<>
				<HistoryContainer>
					<History />
				</HistoryContainer>
				<InfiniteScroll
					dataLength={this.state.photos.length}
					next={this.getPhoto}
					hasMore={true}
					loader={<h4>Loading...</h4>}>
					<PostsContainer>
						{photos.length > 0 &&
							photos.map((photo) => {
								return <Post key={photo.id} photo={photo} />;
							})}
					</PostsContainer>
				</InfiniteScroll>
			</>
		);
	}
}

export default PostPage;
