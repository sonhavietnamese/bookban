import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, TouchableHighlight } from "react-native"


import { BLACK, RED, YELLOW, WHITE, DARK_GREY, LIGHT_GREY } from '../../assets/colors'
import { string } from "../../assets/strings"
import Header from "../../components/Header"

import {
    LineChart,
} from "react-native-chart-kit";
import ChartInfo from "../../components/ChartInfo"
import TableStatus from "./TableStatus"

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {

        const chartConfig = {
            backgroundColor: "transparent",
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

        const { modalVisible } = this.state


        return (
            <View style={{ flex: 1, backgroundColor: WHITE }}>

                <Header restaurantName="The Pizza" type="Thông tin" />


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
                    <View style={[styles.componentContainer, { marginBottom: 10 }]}>
                        <Text style={styles.component}>{string.tableStatus}</Text>
                        {/* <TouchableOpacity style={styles.plusBtn} onPress={() => {
                            this.setModalVisible(true);
                        }} >
                            <Text style={styles.plus}>+</Text>
                        </TouchableOpacity> */}
                    </View>
                    <TableStatus />

                    <View style={{ marginLeft: 60, marginTop: 20 }}>
                        <Text style={styles.component}>{string.tableBooking}</Text>
                        <LineChart
                            data={{
                                labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
                                datasets: [
                                    {
                                        data: [
                                            4,
                                            10,
                                            50,
                                            45,
                                            78,
                                            36,
                                            45
                                        ],
                                        color: (opacity = 1) => `rgba(227, 0, 26, ${opacity})`,
                                    },
                                    {
                                        data: [
                                            4,
                                            2,
                                            1,
                                            20,
                                            0,
                                            1,
                                            0
                                        ],
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
                            number={268}
                        />

                        <ChartInfo
                            type="CANCEL"
                            number={28}
                        />

                    </View>


                    <View style={{ marginLeft: 60, marginTop: 20, marginBottom: 20 }}>
                        <Text style={styles.component}>{string.foodOrder}</Text>
                        <LineChart
                            data={{
                                labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
                                datasets: [
                                    {
                                        data: [
                                            6,
                                            3,
                                            14,
                                            16,
                                            15,
                                            8,
                                            8
                                        ],
                                        color: (opacity = 1) => `rgba(227, 0, 26, ${opacity})`,
                                    },
                                    {
                                        data: [
                                            4,
                                            7,
                                            1,
                                            10,
                                            0,
                                            1,
                                            0
                                        ],
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
                            number={74}
                        />

                        <ChartInfo
                            type="CANCEL"
                            number={28}
                        />

                    </View>
                </ScrollView>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}

                >
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>

                            <TouchableHighlight
                                style={{
                                    width: 30, height: 30,
                                    backgroundColor: DARK_GREY,
                                    justifyContent: "center",
                                    alignItems: "center", borderRadius: 15,
                                    position: "absolute",
                                    right: 15,
                                    top: 15,
                                    zIndex: 2
                                }}
                                onPress={() => {
                                    this.setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>X</Text>
                            </TouchableHighlight>

                            <TableStatus />
                            {/* <BookingModal /> */}


                        </View>
                    </View>
                </Modal>


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