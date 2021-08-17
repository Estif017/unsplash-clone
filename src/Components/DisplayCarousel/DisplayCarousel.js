import React, { Component } from 'react';
import PhotoCarousel from 'components/PhotoCarousel';
import { Content, View, Remove } from './DisplayCarousel.styles';

export default class DisplayCarousel extends Component {
	render() {
		return (
			<View>
				<Content>
					<Remove onClick={this.props.closeCarousel}>&times;</Remove>
					<PhotoCarousel {...this.props} />
				</Content>
			</View>
		);
	}
}
