import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, TouchableNativeFeedback } from "react-native"


import { BLACK, RED, YELLOW, WHITE, DARK_GREY, LIGHT_GREY } from '../../assets/colors'
import { string } from "../../assets/strings"

class Order extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: WHITE }}>

                <Text> Order</Text>

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
});


export default Order