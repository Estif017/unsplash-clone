import styled from 'styled-components';

export const PostContainer = styled.div`
	background: rgba(0, 0, 0, 0.1);
	border: 2px solid ${(props) => props.theme.secondary};
	padding: 15px;
	margin: 20px 0;
	border-radius: 5%;
`;

export const PostHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const HeaderStatus = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const ImageContainer = styled.div`
	height: 500px;
	margin-top: 5px;
	overflow: hidden;
`;

export const Image = styled.img`
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => (height ? height : '100%')};
	border-radius: ${({ borderRadius }) => borderRadius};
	cursor: pointer;
	object-fit: cover;
	object-position: 50% 50%;
`;

export const Container = styled.div`
	display: flex;
	margin-top: 10px;
`;
