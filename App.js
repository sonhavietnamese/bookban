/* eslint-disable quotes */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
	SafeAreaView,
	Text,
	StatusBar,
	Button,
} from 'react-native';

import { notificationManager } from "./src/components/NotificationManager"

import Login from "./src/screens/Login"

class App extends Component {
	constructor(props) {
		super(props)
		this.localNotify = null
	}

	async componentDidMount() {
		this.localNotify = notificationManager
		this.localNotify.configure()
	}

	onPressSendNotification = () => {
		this.localNotify.showNotification(
			1,
			"Test App Noti",
			"Local Noti",
			{},
			{}
		)
	}

	render() {
		return (
			<>
				<StatusBar hidden={true} />

				<Login />


			</>
		)
	}

}


export default App;
