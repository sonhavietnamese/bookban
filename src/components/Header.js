import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { RED, YELLOW } from '../assets/colors'

export default function Header({ restaurantName, type }) {
    return (
        <View style={styles.header}>
            <Text style={{ fontFamily: "MB", fontSize: 27, color: RED }} >{restaurantName}</Text>
            <Text style={{ fontFamily: "MB", fontSize: 18, color: YELLOW }} >{type}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginLeft: 45,
        marginTop: 45,
        marginBottom: 20
    },
})