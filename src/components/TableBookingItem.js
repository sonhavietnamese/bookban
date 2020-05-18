import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { BLACK, DARK_GREY, LIGHT_GREY } from "../assets/colors"

const TableBookingItem = ({ username, time, onPress }) => (
    <TouchableOpacity
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 60, marginRight: 60,
            backgroundColor: LIGHT_GREY,
            height: 40,
            borderRadius: 10,
            alignItems: "center",
            padding: 20,
            marginTop: 5
        }}>
        <Text style={{
            fontFamily: "MSB",
            fontSize: 12,
            color: BLACK
        }}>{username}</Text>
        <Text style={{
            fontFamily: "MSB",
            fontSize: 12,
            color: DARK_GREY
        }}
            onPress={onPress}
        >{time}</Text>
    </TouchableOpacity>
);
export default TableBookingItem;