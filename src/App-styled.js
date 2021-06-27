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
    /* width: 500px; */
    height: 700px;
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

export const HistorysContainer = styled.div`
	display: flex;
	margin-left: 100px;
`;

export const PostsContainer = styled.div``;

export const PostContainer = styled.div`
	position: relative;
	width: 90%;
	margin: 20px auto;
`;

export const More = styled.button`
	position: absolute;
	top: 30px;
	right: 10px;
	border: none;
	outline: none;
`;

export const HeaderStatus = styled.div`
	display: flex;
`;
