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

export const More = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	margin-right: 10px;
`;
export const P = styled.p`
	font-size: 18px;
	margin-bottom: 3px;
`;
export const Container = styled.div`
	display: flex;
	margin: 5px;
`;
