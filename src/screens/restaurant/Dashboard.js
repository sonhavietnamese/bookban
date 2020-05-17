import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, TouchableNativeFeedback } from "react-native"


import { BLACK, RED, YELLOW, WHITE, DARK_GREY, LIGHT_GREY } from '../../assets/colors'
import { string } from "../../assets/strings"

class Dashboard extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: WHITE }}>

                <View style={styles.header}>
                    <Text style={{ fontFamily: "MB", fontSize: 27, color: RED }} >Biển lớn</Text>
                </View>


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
        flexDirection: "row",
        marginLeft: 45,
        marginTop: 45,
        marginBottom: 20
    },
    editBtn: {
        position: "absolute",
        width: 40, height: 40,
        borderRadius: 25,
        backgroundColor: YELLOW,
        justifyContent: "center",
        alignItems: "center"
    },
});


export default Dashboard