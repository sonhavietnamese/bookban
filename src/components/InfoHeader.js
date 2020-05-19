import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { BLACK, YELLOW } from '../assets/colors'

export default function InfoHeader({ first, second }) {
    return (

        <View style={styles.header}>
            <Text style={{ fontFamily: "MB", fontSize: 27, color: YELLOW }} >{first}</Text>
            <Text style={{ fontFamily: "MR", fontSize: 27, color: BLACK }} > {second}.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        marginLeft: 45,
        marginTop: 45,
        marginBottom: 20
    },
})