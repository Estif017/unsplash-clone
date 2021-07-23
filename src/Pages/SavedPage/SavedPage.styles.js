import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SavedContainer = styled.div`
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
	margin-left: 20px;
	text-decoration: none;
	&.active {
		text-decoration: underline;
	}
`;
