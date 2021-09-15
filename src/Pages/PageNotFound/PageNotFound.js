import React from 'react';

const PageNotFound = () => {
	return (
		<div id='wrapper'>
			<img src='https://i.imgur.com/A040Lxr.png' alt='page not found' />
			<div id='info'>
				<h1 style={{ position: 'absolute', top: '10%', left: '55%' }}>
					This page could not be found
				</h1>
			</div>
		</div>
	);
};

export default PageNotFound;
