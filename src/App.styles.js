import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    width: 55%;
	margin: 0 auto;
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.main};
}
`;
