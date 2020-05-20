import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, TouchableNativeFeedback } from "react-native"


import { NavigationContainer } from '@react-navigation/native'
import {
    createStackNavigator,
    CardStyleInterpolators
} from '@react-navigation/stack'

import { BLACK, RED, YELLOW, WHITE, DARK_GREY, LIGHT_GREY } from '../../assets/colors'
import { string } from "../../assets/strings"
import BottomTab from "../../components/BottomTab"
import BookingScreen from "./BookingScreen"
import ExploreScreen from "./ExploreScreen"

class Home extends Component {
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
            <View style={{ flex: 1, backgroundColor: WHITE, }}>

                <View style={{ width: 30, height: 30, backgroundColor: YELLOW, position: "absolute", bottom: 0, left: 0 }} />
                <View style={{ width: 30, height: 30, backgroundColor: YELLOW, position: "absolute", bottom: 0, right: 0 }} />

                <BottomTab bgNavBar={YELLOW} bgNavBarSelector={RED} stroke={YELLOW}>
                    <BottomTab.Item
                        icon={require("../../assets/imgs/tab1.png")}
                        selectedIcon={require("../../assets/imgs/tab1.png")}
                        title="Tab1"
                    >

                        <ExploreScreen />

                    </BottomTab.Item >
                    <BottomTab.Item
                        icon={require("../../assets/imgs/tab2.png")}
                        selectedIcon={require("../../assets/imgs/tab2.png")}
                        title="Tab2"
                    >
                        <BookingScreen />
                    </BottomTab.Item>
                    <BottomTab.Item
                        icon={require("../../assets/imgs/tab2.png")}
                        selectedIcon={require("../../assets/imgs/tab2.png")}
                        title="Tab3"
                    >
                        <View>
                            {/*Page Content*/}
                        </View>
                    </BottomTab.Item>

                </BottomTab >

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
        fontFamily: "QsSemiBold",
        fontSize: 16
    }
});


export default Home