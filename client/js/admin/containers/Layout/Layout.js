import React, { Component } from 'react';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';

export default class Layout extends Component {
	render() {
		return (
			<div>
				<LeftSide />
				<RightSide />
			</div>
		);
	}
}
