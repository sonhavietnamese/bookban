import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, TouchableNativeFeedback } from "react-native"
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

import { NavigationContainer } from '@react-navigation/native'
import {
    createStackNavigator,
    CardStyleInterpolators
} from '@react-navigation/stack'

import { BLACK, RED, YELLOW, WHITE, DARK_GREY, LIGHT_GREY } from '../assets/colors'
import { string } from "../assets/strings"
import CustomerInfo from "./customer/CustomerInfo";
import RestaurantRole from "./restaurant/RestaurantRole"

class RoleScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            role: "NONE"
        }
    }

    changeRole = (role) => {
        this.setState({ role })
    }


    render() {
        const { role } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: WHITE, justifyContent: "center", alignItems: "center" }}>


                <Text style={{ fontFamily: "MSB", fontSize: 18, bottom: 30 }}> {string.yourRole} </Text>


                <View style={[styles.roleBtnContainer, { marginTop: Dimensions.get("window").height / 20 }]}>
                    <TouchableOpacity
                        style={[
                            styles.roleBtn,
                            { backgroundColor: role == "RESTAURANT" ? RED : LIGHT_GREY }
                        ]}
                        onPress={() => this.changeRole("RESTAURANT")}
                    >
                        <Image
                            source={require("../assets/imgs/restaurant.png")}
                            style={{ width: 60, height: 60 }}
                            resizeMode="contain"
                        />

                    </TouchableOpacity>
                    <Text style={[styles.roleText, { color: role == "RESTAURANT" ? RED : LIGHT_GREY }]} > {string.restaurantRole} </Text>
                </View>


                <View style={[styles.roleBtnContainer, { marginTop: Dimensions.get("window").height / 15, marginBottom: 70 }]}>
                    <TouchableOpacity
                        style={[
                            styles.roleBtn,
                            { backgroundColor: role == "CUSTOMER" ? YELLOW : LIGHT_GREY }
                        ]}
                        onPress={() => this.changeRole("CUSTOMER")}
                    >
                        <Image
                            source={require("../assets/imgs/person.png")}
                            style={{ width: 60, height: 60 }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <Text style={[styles.roleText, { color: role == "CUSTOMER" ? YELLOW : LIGHT_GREY }]} > {string.customerRole} </Text>
                </View>


                <TouchableOpacity
                    style={{
                        position: "absolute",
                        bottom: 50,
                        right: 0,
                        height: 70,
                        width: Dimensions.get("window").width / 2,
                        backgroundColor: YELLOW,
                        borderTopLeftRadius: 35,
                        borderBottomLeftRadius: 35,
                        justifyContent: "center",
                        alignItems: "center"
                    }}

                    onPress={() =>
                        role == "RESTAURANT" ? this.props.navigation.navigate("RestaurantRole") : this.props.navigation.navigate("CustomerInfoScreen")
                        // this.props.navigation.navigate("RestaurantRole")
                    }
                >
                    <Text style={{ fontFamily: "MSB", color: WHITE, fontSize: 20 }}> {string.done} </Text>
                </TouchableOpacity>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    roleBtnContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    roleBtn: {
        width: 120,
        height: 120,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    roleText: {
        fontFamily: "MR",
        fontSize: 16
    }
});

const Stack = createStackNavigator();

function Roles() {
    return (
        // <NavigationContainer>
        <Stack.Navigator
            headerMode="none"
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid
            }}
        >
            <Stack.Screen name='RoleScreen' component={RoleScreen} />
            <Stack.Screen name='CustomerInfoScreen' component={CustomerInfo} />
            <Stack.Screen name='RestaurantRole' component={RestaurantRole} />
        </Stack.Navigator>
        // {/* </NavigationContainer> */ }
    )
}

export default Roles