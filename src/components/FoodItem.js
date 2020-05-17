import React from "react"
import { View, Text, Image } from "react-native"
import { BLACK, RED, YELLOW, WHITE, DARK_GREY, LIGHT_GREY } from '../assets/colors'


export default function FoodItem({ uri, price, name }) {
    return (
        <View style={{ flex: 1, marginRight: 5 }}>
            <View style={{ alignItems: "center", backgroundColor: YELLOW, padding: 5, borderRadius: 40 }}>
                <Image
                    source={uri}
                    style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35
                    }}
                />
                <Text style={{ fontFamily: "MSB", fontSize: 14, marginTop: 15, width: 40, textAlign: "center" }}>{name}</Text>
                <Text style={{ fontFamily: "MSB", fontSize: 12, marginTop: 5, color: WHITE }}>{price}</Text>
                <Text style={{ fontFamily: "MSB", fontSize: 10, color: WHITE, marginBottom: 5 }}>VND</Text>
            </View>

        </View>
    )
}