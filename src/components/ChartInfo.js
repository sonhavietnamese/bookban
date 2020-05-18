import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { BLACK, RED, YELLOW, WHITE, DARK_GREY, LIGHT_GREY } from '../assets/colors'
import { string } from "../assets/strings"

export default function ChartInfo({ color, type, number }) {
    return (
        <View style={styles.chartInfoContainer}>
            <View style={[styles.label, { backgroundColor: type == "SUCCESS" ? RED : YELLOW }]} />
            <Text style={styles.chartInfo}>{type == "SUCCESS" ? string.bookingSuccess : string.bookingCancel}: {number} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    chartInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20
    },
    label: {
        height: 10,
        width: 10,
        borderRadius: 10,
        backgroundColor: RED
    },
    chartInfo: {
        fontFamily: "MR",
        fontSize: 12,
        marginLeft: 15
    }
})