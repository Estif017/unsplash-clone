import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

export const UserPostsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	border: 1px solid red;
`;

export const ImageContainer = styled.div`
	width: 265px;
	height: 265px;
	margin: 15px;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
`;

export const InfiniteScrollContainer = styled(InfiniteScroll)`
	display: flex;
	flex-wrap: wrap;
`;
