import React from 'react';
import PhotoCarousel from 'components/PhotoCarousel';
import { Content, View, Remove } from './DisplayCarousel.styles';

const DisplayCarousel = (props) => {
	return (
		<View>
			<Content>
				<Remove onClick={props.closeCarousel}>&times;</Remove>
				<PhotoCarousel {...props} />
			</Content>
		</View>
	);
};
export default DisplayCarousel;
