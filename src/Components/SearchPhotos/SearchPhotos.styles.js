import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

export const InfiniteScrollContainer = styled(InfiniteScroll)`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
`;
export const ImageContainer = styled.div``;

export const Image = styled.img`
	width: 100%;
	cursor: pointer;
`;
