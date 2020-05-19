import React from "react"
import { Text, TouchableOpacity, Dimensions } from "react-native"
import { YELLOW, WHITE } from '../assets/colors'
import { string } from "../assets/strings"

export default function DoneBtn({ onPress }) {
    return (
        <TouchableOpacity
            style={{
                position: "absolute",
                right: 0,
                bottom: 50,
                height: 70,
                width: Dimensions.get("window").width - 100,
                marginLeft: 100,
                backgroundColor: YELLOW,
                borderTopLeftRadius: 35,
                borderBottomLeftRadius: 35,
                justifyContent: "center",
                alignItems: "center"
            }}
            onPress={onPress}
        >
            <Text style={{ fontFamily: "MSB", color: WHITE, fontSize: 20 }}> {string.done} </Text>
        </TouchableOpacity>
    )
}
