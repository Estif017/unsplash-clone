import React, { Component } from 'react';
import { HistoryContainer, AddHistory } from './History.styled';
import { ReactComponent as Add } from 'assets/add.svg';

export class History extends Component {
	render() {
		return (
			<HistoryContainer>
				<AddHistory>
					<Add />
				</AddHistory>
			</HistoryContainer>
		);
	}
}

export default History;
