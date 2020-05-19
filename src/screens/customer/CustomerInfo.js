import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, TouchableNativeFeedback } from "react-native"
import Reinput from 'reinput';


import { NavigationContainer } from '@react-navigation/native'
import {
    createStackNavigator,
    CardStyleInterpolators
} from '@react-navigation/stack'

import { BLACK, RED, YELLOW, WHITE, DARK_GREY, LIGHT_GREY } from '../../assets/colors'
import { string } from "../../assets/strings"

import Header from "../../components/Header"
import InfoHeader from "../../components/InfoHeader"
import DoneBtn from "../../components/DoneBtn";
import Home from "./Home";

class CustomerInfoScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            userdes: ""
        }
    }

    handleUsername = text => {
        this.setState({ username: text });
    }

    handleUserdes = text => {
        this.setState({ userdes: text });
    }


    render() {
        const { username, userdes } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: WHITE }}>

                <InfoHeader first="Thông tin" second="của bạn" />

                <Reinput
                    style={styles.input}
                    label={string.username}
                    value={username}
                    onChangeText={this.handleUsername}
                    labelActiveColor={DARK_GREY}
                    color={RED}
                />

                <Reinput
                    style={styles.input}
                    label={string.userdes}
                    value={userdes}
                    onChangeText={this.handleUserdes}
                    labelActiveColor={DARK_GREY}
                    color={RED}
                    multiline
                />

                <DoneBtn onPress={() => this.props.navigation.navigate("CustomerHomeScreen")} />


            </View>
        )
    }
}

const Stack = createStackNavigator();

function CustomerInfo() {
    return (
        // <NavigationContainer>
        <Stack.Navigator
            headerMode="none"
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <Stack.Screen name='CustomerInfoScreen' component={CustomerInfoScreen} />
            <Stack.Screen name='CustomerHomeScreen' component={Home} />
        </Stack.Navigator>
        // {/* </NavigationContainer> */ }
    )
}

const styles = StyleSheet.create({

    input: {
        marginTop: 15,
        marginLeft: 60,
        marginRight: 60,
        fontFamily: 'QsBold'
    },
});


export default CustomerInfo