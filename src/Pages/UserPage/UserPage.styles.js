import styled from 'styled-components';

export const UserProfileContainer = styled.div`
	width: 200px;
	margin: 5px auto;
	text-align: center;
`;

export const UserRecord = styled.div`
	display: flex;
`;

export const Record = styled.div`
	margin: 10px;
`;

export const ImageHighlightContainer = styled.div`
	display: flex;
	width: fit-content;
	margin: 10px auto;
`;

export const Image = styled.img`
	width: 85px;
	height: 85px;
	margin: 5px;
`;

export const H1 = styled.h1``;
export const H3 = styled.h3``;
export const p = styled.p``;
export const StyledA = styled.a`
	color: ${(props) => props.theme.main};
	text-decoration: none;
	font-size: 24px;
`;
