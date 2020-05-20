import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native"


import { BLACK, RED, YELLOW, WHITE, DARK_GREY, LIGHT_GREY } from '../../assets/colors'
// import { string } from "../../assets/strings"
import Header from "../../components/Header"

// import {
//     LineChart,
// } from "react-native-chart-kit";
// import ChartInfo from "../../components/ChartInfo"

class TableStatus extends Component {
    constructor(props) {
        super(props)

        this.state = {
            model1: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            model2: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            model3: [0, 1, 2, 2, 0, 3, 0, 2, 0, 2, 1, 0],
            model4: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            model5: [0, 1, 2, 3, 0, 2, 0, 2, 0, 2, 1, 0],
            model6: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            model7: [0, 1, 2, 2, 0, 2, 0, 2, 0, 3, 1, 0],
            model8: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            model9: [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
        }
    }


    render() {

        const { model1, model2, model3, model4, model5, model6, model7, model8, model9 } = this.state

        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                {/* <View style={{ marginLeft: -100 }}>
                    <Header restaurantName="Trạng thái bàn" />
                </View>

                <View style={{ height: 60 }} /> */}

                <View style={{ backgroundColor: LIGHT_GREY, flexDirection: "row" }}>
                    {model1.map((x, index) => (
                        x === 0 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: LIGHT_GREY }} />) :
                            x === 1 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: YELLOW }} />) :
                                x === 2 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: DARK_GREY }} />) :
                                    x === 3 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: RED }} />) : null
                    ))}
                </View>

                <View style={{ backgroundColor: LIGHT_GREY, flexDirection: "row" }}>
                    {model2.map((x, index) => (
                        x === 0 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: LIGHT_GREY }} />) :
                            x === 1 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: YELLOW }} />) :
                                x === 2 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: DARK_GREY }} />) :
                                    x === 3 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: RED }} />) : null
                    ))}
                </View>

                <View style={{ backgroundColor: LIGHT_GREY, flexDirection: "row" }}>
                    {model3.map((x, index) => (
                        x === 0 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: LIGHT_GREY }} />) :
                            x === 1 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: YELLOW }} />) :
                                x === 2 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: DARK_GREY }} />) :
                                    x === 3 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: RED }} />) : null
                    ))}
                </View>

                <View style={{ backgroundColor: LIGHT_GREY, flexDirection: "row" }}>
                    {model4.map((x, index) => (
                        x === 0 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: LIGHT_GREY }} />) :
                            x === 1 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: YELLOW }} />) :
                                x === 2 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: DARK_GREY }} />) :
                                    x === 3 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: RED }} />) : null
                    ))}
                </View>

                <View style={{ backgroundColor: LIGHT_GREY, flexDirection: "row" }}>
                    {model5.map((x, index) => (
                        x === 0 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: LIGHT_GREY }} />) :
                            x === 1 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: YELLOW }} />) :
                                x === 2 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: DARK_GREY }} />) :
                                    x === 3 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: RED }} />) : null
                    ))}
                </View>

                <View style={{ backgroundColor: LIGHT_GREY, flexDirection: "row" }}>
                    {model6.map((x, index) => (
                        x === 0 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: LIGHT_GREY }} />) :
                            x === 1 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: YELLOW }} />) :
                                x === 2 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: DARK_GREY }} />) :
                                    x === 3 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: RED }} />) : null
                    ))}
                </View>

                <View style={{ backgroundColor: LIGHT_GREY, flexDirection: "row" }}>
                    {model7.map((x, index) => (
                        x === 0 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: LIGHT_GREY }} />) :
                            x === 1 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: YELLOW }} />) :
                                x === 2 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: DARK_GREY }} />) :
                                    x === 3 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: RED }} />) : null
                    ))}
                </View>

                <View style={{ backgroundColor: LIGHT_GREY, flexDirection: "row" }}>
                    {model8.map((x, index) => (
                        x === 0 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: LIGHT_GREY }} />) :
                            x === 1 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: YELLOW }} />) :
                                x === 2 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: DARK_GREY }} />) :
                                    x === 3 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: RED }} />) : null
                    ))}
                </View>

                <View style={{ backgroundColor: LIGHT_GREY, flexDirection: "row" }}>
                    {model9.map((x, index) => (
                        x === 0 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: LIGHT_GREY }} />) :
                            x === 1 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, backgroundColor: YELLOW }} />) :
                                x === 2 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: DARK_GREY }} />) :
                                    x === 3 ? (<TouchableOpacity key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: RED }} />) : null
                    ))}
                </View>

                <View style={{ marginTop: 10, marginLeft: -110 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: RED }} />
                        <Text style={{ fontFamily: "MR", marginBottom: 2, fontSize: 12 }}> Bàn đã được đặt </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 3, alignItems: "center" }}>
                        <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: DARK_GREY }} />
                        <Text style={{ fontFamily: "MR", marginBottom: 2, fontSize: 12 }}> Bàn chưa được đặt </Text>
                    </View>
                </View>

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


export default TableStatus