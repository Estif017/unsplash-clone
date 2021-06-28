import React from 'react';
import { HistorysContainer, PostsContainer } from './PostPage-styled';
import { History, Post } from '../../Components';

const PostPage = ({ photos }) => {
	return (
		<>
			<HistorysContainer>
				<History />
			</HistorysContainer>
			<PostsContainer>
				{photos.length > 0 &&
					photos.map((photo) => {
						return <Post key={photo.id} photo={photo} />;
					})}
			</PostsContainer>
		</>
	);
};

export default PostPage;
