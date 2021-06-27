import React from 'react';
import { ReactComponent as MoreIcon } from '../../assets/MoreIcon.svg';
import { ReactComponent as Likes } from '../../assets/Likes.svg';
import { ReactComponent as Star } from '../../assets/Star.svg';

import { PostContainer, HeaderStatus, More } from './Post.styled';

const Post = ({ photo }) => {
	return (
		<PostContainer>
			<div className='post-header'>
				<HeaderStatus>
					<div className='profile-image-container'>
						<img
							src={photo.user.profile_image.medium}
							alt='user-profile'
							className='profile-image'
						/>
					</div>
					<div className='status'>
						<h4>{photo.user.name}</h4>
						<h4 className='posted-time'>12 hour ago</h4>
					</div>
				</HeaderStatus>
				<More>
					<MoreIcon />
				</More>
			</div>

			<p>{photo.user.bio}</p>
			<div className='image-container'>
				<img src={photo.urls.regular} alt='posted-img' />
			</div>
			<div className='Like-star'>
				<Likes />
				<Star />
			</div>
		</PostContainer>
	);
};

export default Post;
