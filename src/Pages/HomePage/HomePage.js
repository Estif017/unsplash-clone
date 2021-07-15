import React from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { HistoryContainer, PostsContainer } from './HomePage.styles';
import { History, Post } from 'components';

export default class HomePage extends React.Component {
	state = {
		photos: [],
		isLoading: false,
		hasError: false,
		page: 1,
	};

	fetchNextPage = () => {
		const nextPage = this.state.page + 1;
		this.setState({ page: nextPage });
	};

	getPhoto = async () => {
		try {
			this.setState({ isLoading: true });
			const { data } = await axios.get(
				`https://api.unsplash.com/photos/?page=${this.state.page}&client_id=${process.env.REACT_APP_ACCESS_KEY}&order_by=latest`
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
	componentDidUpdate(prevProps, prevState) {
		if (this.state.page !== prevState.page) {
			this.getPhoto();
		}
	}
	componentDidMount() {
		this.getPhoto();
	}
	render() {
		const { photos, isLoading, hasError } = this.state;
		return (
			<>
				<HistoryContainer>
					<History />
				</HistoryContainer>
				{isLoading && <h1>Loading ....</h1>}
				{hasError && <h1>Error ....</h1>}
				<InfiniteScroll
					dataLength={this.state.photos.length}
					next={this.fetchNextPage}
					hasMore={true}
					loader={<h4>Loading...</h4>}>
					<PostsContainer>
						{photos.map((photo) => (
							<Post key={photo.id} photo={photo} />
						))}
					</PostsContainer>
				</InfiniteScroll>
			</>
		);
	}
}
