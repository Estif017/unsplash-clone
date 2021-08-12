import React, { Component } from 'react';
import PhotoCarousel from 'components/PhotoCarousel';
import { Content, View, Remove } from './DisplayCarousel.styles';

export default class DisplayCarousel extends Component {
	render() {
		return (
			<View display={this.props.display}>
				<Content>
					<Remove className='close' onClick={this.props.closeCarousel}>
						&times;
					</Remove>
					<PhotoCarousel photos={this.props.photos} index={this.props.index} />
				</Content>
			</View>
		);
	}
}
