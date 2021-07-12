import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchResultsContainer = styled.div``;

export const LinkContainer = styled.div`
	text-align: right;
	margin-top: 30px;
	padding-bottom: 5px;
`;

export const LinkStyles = styled(Link)`
	color: black;
	font-size: 24px;
	margin-left: 20px;
	text-decoration: none;
	&.active {
		text-decoration: underline;
	}
`;
