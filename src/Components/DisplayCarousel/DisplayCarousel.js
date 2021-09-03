import React from 'react';
import { useDispatch } from 'react-redux';
import { closeCarousel } from 'redux/appReducers/actions';
import PhotoCarousel from 'components/PhotoCarousel';
import { Content, View, Remove } from './DisplayCarousel.styles';

const DisplayCarousel = (props) => {
	const dispatch = useDispatch();

	return (
		<View>
			<Content>
				<Remove onClick={() => dispatch(closeCarousel())}>&times;</Remove>
				<PhotoCarousel {...props} />
			</Content>
		</View>
	);
};
export default DisplayCarousel;
