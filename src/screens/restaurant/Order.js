import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView, TouchableNativeFeedback } from "react-native"

import { BLACK, RED, YELLOW, WHITE, DARK_GREY, LIGHT_GREY } from '../../assets/colors'
import { string } from "../../assets/strings"
import Header from "../../components/Header"
import TableBookingItem from "../../components/TableBookingItem"
import FoodOrderingItem from "../../components/FoodOrderingItem"


class Order extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const user = [
            {
                name: "ha",
                time: "12 A.M",
                price: "15.000 VND"
            },
            {
                name: "asdasd",
                time: "12 A.M",
                price: "15.000 VND"
            },
            {
                name: "asdasd",
                time: "12 A.M",
                price: "15.000 VND"
            },
            {
                name: "adasd",
                time: "12 A.M",
                price: "15.000 VND"
            },
            {
                name: "asafadfa",
                time: "12 A.M",
                price: "15.000 VND"
            },
            {
                name: "qreqqtqtq",
                time: "12 A.M",
                price: "15.000 VND"
            },
        ]

        return (
            <View style={{ flex: 1, backgroundColor: WHITE }}>
                <Header restaurantName="Biển lớn" type="Đơn hàng" />


                <ScrollView >

                    <View style={styles.componentContainer}>
                        <Text style={styles.component}>{string.tableBooking}</Text>
                    </View>

                    {user.map((user, i) => (

                        <TableBookingItem key={i} username={user.name} time={user.time} />

                    ))}


                    <View style={styles.componentContainer}>
                        <Text style={styles.component}>{string.foodOrder}</Text>
                    </View>

                    {user.map((user, i) => (

                        <FoodOrderingItem key={i} username={user.name} totalPrice={user.price} />

                    ))}
                </ScrollView>

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
    component: {
        fontFamily: "MSB",
        color: BLACK,
        fontSize: 16
    },
    componentContainer: {
        flexDirection: "row",
        alignItems: "center",
        // width: 230,
        marginRight: 60,
        justifyContent: "space-between",
        marginTop: 20,
        marginLeft: 60
    },
    plusBtn: {
        width: 30,
        height: 30,
        backgroundColor: RED,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
});


export default Order