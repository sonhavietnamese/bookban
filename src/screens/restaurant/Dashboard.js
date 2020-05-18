import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native"


import { BLACK, RED, YELLOW, WHITE, DARK_GREY, LIGHT_GREY } from '../../assets/colors'
import { string } from "../../assets/strings"
import Header from "../../components/Header"

import {
    LineChart,
} from "react-native-chart-kit";
import ChartInfo from "../../components/ChartInfo"

class Dashboard extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        const chartConfig = {
            backgroundColor: WHITE,
            backgroundGradientFrom: WHITE,
            backgroundGradientTo: WHITE,
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(183, 183, 183, ${opacity})`,
            propsForDots: {
                r: "4",
                strokeWidth: "0",
                stroke: RED
            },
            useShadowColorFromDataset: true
        }

        const data = [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
        ]


        return (
            <View style={{ flex: 1, backgroundColor: WHITE }}>

                <Header restaurantName="Biển lớn" type="Thông tin" />


                <TouchableOpacity style={styles.editBtn}>
                    <Image
                        source={require("../../assets/imgs/edit.png")}
                        style={{
                            width: 15,
                            height: 15
                        }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <ScrollView>
                    <View style={styles.componentContainer}>
                        <Text style={styles.component}>{string.tableStatus}</Text>
                        <TouchableOpacity style={styles.plusBtn}>
                            <Text style={styles.plus}>+</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ marginLeft: 60, marginTop: 20 }}>
                        <Text style={styles.component}>{string.tableBooking}</Text>
                        <LineChart
                            data={{
                                labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
                                datasets: [
                                    {
                                        data: data,
                                        color: (opacity = 1) => `rgba(227, 0, 26, ${opacity})`,
                                    },
                                    {
                                        data: data,
                                        color: (opacity = 1) => `rgba(255, 208, 50, ${opacity})`,
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width - 100} // from react-native
                            height={200}

                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={chartConfig}
                            style={styles.chartStyle}
                        />

                        <ChartInfo
                            type="SUCCESS"
                            number={20}
                        />

                        <ChartInfo
                            type="CANCEL"
                            number={20}
                        />

                    </View>


                    <View style={{ marginLeft: 60, marginTop: 20 }}>
                        <Text style={styles.component}>{string.foodOrder}</Text>
                        <LineChart
                            data={{
                                labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
                                datasets: [
                                    {
                                        data: data,
                                        color: (opacity = 1) => `rgba(227, 0, 26, ${opacity})`,
                                    },
                                    {
                                        data: data,
                                        color: (opacity = 1) => `rgba(255, 208, 50, ${opacity})`,
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width - 100} // from react-native
                            height={200}

                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={chartConfig}
                            style={styles.chartStyle}
                        />

                        <ChartInfo
                            type="SUCCESS"
                            number={20}
                        />

                        <ChartInfo
                            type="CANCEL"
                            number={20}
                        />

                    </View>
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
    header: {
        marginLeft: 45,
        marginTop: 45,
        marginBottom: 20
    },
    editBtn: {
        position: "absolute",
        width: 30, height: 30,
        borderRadius: 25,
        backgroundColor: YELLOW,
        justifyContent: "center",
        alignItems: "center",
        right: 45,
        top: 45
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
    plus: {
        fontFamily: "MSB",
        color: WHITE,
        fontSize: 16,
        marginBottom: 2
    },
    chartStyle: {
        marginLeft: -20,
        marginTop: 20
    },


});


export default Dashboard