import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import LazyLoad from 'react-lazyload';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ReactComponent as Star } from 'assets/star.svg';
import { CollectionsContainer, Image, P, More } from './CollectionsPage.styles';

export class CollectionsPage extends Component {
	state = {
		collections: [],
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
				`https://api.unsplash.com/collections/?page=${this.state.page}&client_id=${process.env.REACT_APP_ACCESS_KEY}&order_by=latest`
			);
			this.setState({
				collections: [...this.state.collections, ...data],
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
		const { collections, isLoading, hasError } = this.state;
		isLoading && <h1>Loading ....</h1>;
		hasError && <h1>Error ....</h1>;
		return (
			<InfiniteScroll
				dataLength={this.state.collections.length}
				next={this.fetchNextPage}
				hasMore={true}
				loader={<h4>Loading...</h4>}>
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
					<Masonry>
						{collections.map((collection) => (
							<CollectionsContainer key={collection.id}>
								<LazyLoad>
									<Link to={`/search/collections/photos/${collection.id}`}>
										<Image src={collection.cover_photo.urls.regular} alt='' />
									</Link>
								</LazyLoad>
								<P>{collection.total_photos}</P>
								<More onClick={() => this.props.addToCollections(collection)}>
									<Star className='like' />
								</More>
							</CollectionsContainer>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</InfiniteScroll>
		);
	}
}

export default CollectionsPage;
