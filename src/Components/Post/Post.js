import React from 'react';
import { ReactComponent as MoreIcon } from 'assets/moreIcon.svg';
import { ReactComponent as Likes } from 'assets/likes.svg';
import { ReactComponent as Star } from 'assets/star.svg';

import { PostContainer, StyledLink, HeaderStatus, More } from './Post.styles';

const Post = ({ photo }) => {
	const clickHandler = () => {
		console.log(photo);
	};
	console.log(photo);
	return (
		<PostContainer>
			<div className='post-header'>
				<HeaderStatus>
					<div className='profile-image-container'>
						<StyledLink to={`/users/${photo.user.username}`}>
							<img
								src={photo.user.profile_image.medium}
								alt='user-profile'
								className='profile-image'
							/>
						</StyledLink>
					</div>
					<div className='status'>
						<StyledLink to={`/users/${photo.user.username}`}>
							<h4>{photo.user.name}</h4>
						</StyledLink>
						<h4 className='posted-time'>12 hour ago</h4>
					</div>
				</HeaderStatus>
				<More>
					<MoreIcon />
				</More>
			</div>
			<p>{photo.user.bio}</p>
			<div className='image-container'>
				<img src={photo.urls.full} alt='posted-img' />
			</div>
			<div className='Like-star'>
				<button onClick={clickHandler}>
					<Likes />
				</button>
				<button onClick={clickHandler}>
					<Star />
				</button>
			</div>
		</PostContainer>
	);
};

export default Post;
