import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h4{
    margin: 10px;
}
.posted-time{
    font-weight: lighter;
}

.post-header{
    margin-bottom: 25px;
}

.image-container{
    height: 600px;
    width: 80%;
    margin-top: 10px;
}
.image-container img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.Like-star{
    margin: 50px;
    display: flex;
    justify-content: space-between;
}

`;
export const AppContainer = styled.div`
	width: 900px;
	margin: 0 auto;
`;
