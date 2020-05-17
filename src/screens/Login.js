import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


import { BLACK, RED, YELLOW, WHITE, DARK_GREY } from '../assets/colors'
import { string } from "../assets/strings"
import Roles from './Roles';
import Reinput from 'reinput';

import { NavigationContainer } from '@react-navigation/native'
import {
	createStackNavigator,
	CardStyleInterpolators
} from '@react-navigation/stack'

// import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

class LoginScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			isLogin: true
		}
	}

	handleEmail = text => {
		this.setState({ email: text });
	};
	handlePassword = text => {
		this.setState({ password: text });
	};

	switchToRegister = () => {
		this.setState({ isLogin: true })
	}

	switchToLogin = () => {
		this.setState({ isLogin: false })
	}

	handleLogin = () => {
		this.props.navigation.navigate("RolesScreen")
	}

	render() {
		const { isLogin } = this.state
		return (
			<View style={[styles.container]}>

				<View style={{ flexDirection: 'row', marginLeft: 60 }}>
					<TouchableOpacity
						onPress={this.switchToRegister}
					>
						<Text
							style={[
								styles.loginText,
								{
									fontFamily: isLogin ? 'MB' : 'MSB',
									color: isLogin ? RED : DARK_GREY
								}
							]}>{string.login}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ paddingLeft: 15 }}
						onPress={this.switchToLogin}
					>
						<Text
							style={[
								styles.registerText,
								{
									fontFamily: isLogin ? 'MSB' : 'MB',
									color: isLogin ? DARK_GREY : YELLOW
								}
							]}>{string.register}</Text>
					</TouchableOpacity>
				</View>
				<View style={{ paddingLeft: 60, marginTop: 40, marginBottom: 20 }}>
					<Reinput
						style={styles.input}
						label={string.email}
						value={this.state.email}
						onChangeText={this.handleEmail}
						labelActiveColor={YELLOW}
						color={RED}
					/>
					<Reinput
						style={styles.input}
						label={string.password}
						placeholderTextColor="black"
						autoCapitalize="none"
						secureTextEntry={true}
						value={this.state.password}
						onChangeText={this.handlePassword}
						labelActiveColor={YELLOW}
						color={RED}
					/>
				</View>
				{
					isLogin ? (
						<View style={{ justifyContent: "center", alignItems: "center", marginTop: 60 }}>
							<TouchableOpacity
								style={styles.submitButton}
								onPress={this.handleLogin}
							>
								<Text style={styles.submitText} > {string.login} </Text>
							</TouchableOpacity>
						</View>
					) : (
							<View style={{ justifyContent: "center", alignItems: "center", marginTop: 60 }}>
								<TouchableOpacity
									style={styles.submitButton}
									onPress={this.handleRegister}
								>
									<Text style={styles.submitText}> {string.register} </Text>
								</TouchableOpacity>
							</View>
						)
				}
			</View >
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 2,
		justifyContent: "center",
	},
	input: {
		height: 40,
		marginTop: 15,
		width: 250,
		fontFamily: 'QsBold'
	},
	submitButton: {
		backgroundColor: 'yellow',
		padding: 10,
		alignItems: "center",
		height: 40,
		width: 250,
	},
	loginText: {
		fontSize: 15
	},
	registerText: {
		fontSize: 15
	},
	submitText: {
		fontFamily: 'MSB',
		fontSize: 16
	}
});

const Stack = createStackNavigator();

function Login() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				headerMode="none"
				screenOptions={{
					gestureEnabled: true,
					gestureDirection: 'horizontal',
					cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid
				}}
			>
				<Stack.Screen name='LoginScreen' component={LoginScreen} />
				<Stack.Screen name='RolesScreen' component={Roles} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Login