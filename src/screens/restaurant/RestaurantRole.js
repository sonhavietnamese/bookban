import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, TouchableNativeFeedback } from "react-native"


import { NavigationContainer } from '@react-navigation/native'
import {
    createStackNavigator,
    CardStyleInterpolators
} from '@react-navigation/stack'

import { BLACK, RED, YELLOW, WHITE, DARK_GREY, LIGHT_GREY } from '../../assets/colors'
import { string } from "../../assets/strings"

import DeliverHome from "../deliver/DeliverHome"
import OwnerInfo from "./OwnerInfo"

class RestaurantRoleScreen extends Component {
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


                <Text style={{ fontFamily: "MSB", fontSize: 18, bottom: 30 }}> {string.yourRoleAtRestaurant} </Text>


                <View style={[styles.roleBtnContainer, { marginTop: Dimensions.get("window").height / 20 }]}>
                    <TouchableOpacity
                        style={[
                            styles.roleBtn,
                            { backgroundColor: role == "OWNER" ? RED : LIGHT_GREY }
                        ]}
                        onPress={() => this.changeRole("OWNER")}
                    >
                        <Image
                            source={require("../../assets/imgs/owner.png")}
                            style={{ width: 60, height: 60 }}
                            resizeMode="contain"
                        />

                    </TouchableOpacity>
                    <Text style={[styles.roleText, { color: role == "OWNER" ? RED : LIGHT_GREY }]} > {string.ownerRole} </Text>
                </View>


                <View style={[styles.roleBtnContainer, { marginTop: Dimensions.get("window").height / 15, marginBottom: 70 }]}>
                    <TouchableOpacity
                        style={[
                            styles.roleBtn,
                            { backgroundColor: role == "DELIVER" ? YELLOW : LIGHT_GREY }
                        ]}
                        onPress={() => this.changeRole("DELIVER")}
                    >
                        <Image
                            source={require("../../assets/imgs/delivery.png")}
                            style={{ width: 60, height: 60 }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <Text style={[styles.roleText, { color: role == "DELIVER" ? YELLOW : LIGHT_GREY }]} > {string.deliveryRole} </Text>
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
                        role == "OWNER" ? this.props.navigation.navigate("OwnerInfoScreen") : this.props.navigation.navigate("DeliverScreen")
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

function RestaurantRole() {
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
            <Stack.Screen name='RestaurantRoleScreen' component={RestaurantRoleScreen} />
            <Stack.Screen name='DeliverScreen' component={DeliverHome} />
            <Stack.Screen name='OwnerInfoScreen' component={OwnerInfo} />
        </Stack.Navigator>
        // </NavigationContainer >
    )
}

export default RestaurantRole