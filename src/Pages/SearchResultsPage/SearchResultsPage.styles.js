import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchResultsContainer = styled.div`
	margin-top: 80px;
	& hr {
		margin-bottom: 15px;
	}
`;

export const LinkContainer = styled.div`
	text-align: right;
	margin-top: 30px;
`;

export const LinkStyles = styled(Link)`
	color: ${(props) => props.theme.main};
	font-size: 24px;
	margin: 10px;
	text-decoration: ${({ active }) => active};
`;
