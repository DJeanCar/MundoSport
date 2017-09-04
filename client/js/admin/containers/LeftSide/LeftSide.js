import React, { Component } from 'react';
import Profile from './Profile/Profile';
import Menu from './Menu/Menu';

export default class LeftSide extends Component {
	render() {
		return (
			<section class="left-side">
				<Profile />
				<Menu />
			</section>
		);
	}
}
