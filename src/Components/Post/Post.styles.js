import styled from 'styled-components';

export const PostContainer = styled.div`
	background-color: white;
	border: 2px solid ${(props) => props.theme.secondary};
	padding: 15px;
	margin: 20px 0;
	border-radius: 15px;
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

export const TotalLikes = styled.h1`
	color: black;
`;
export const UserName = styled.h4`
	font-weight: bold;
	color: black;
`;
export const CreatedAt = styled.h4`
	color: #b3b3b3;
`;

export const Description = styled.div`
	color: black;
`;

export const ImageContainer = styled.div`
	max-height: 800px;
	margin-top: 5px;
	overflow: hidden;
`;

export const Image = styled.img`
	width: ${({ width }) => (width ? width : '100%')};
	border-radius: ${({ borderRadius }) => borderRadius};
	height: 100%;
	max-height: 800px;
	cursor: pointer;
	object-fit: cover;
	object-position: 50% 50%;
`;

export const Container = styled.div`
	display: flex;
	margin-top: 10px;
`;
