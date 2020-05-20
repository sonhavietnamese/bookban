import React, { Component } from "react";
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
    Image,
    Dimensions,
    TouchableOpacity,
} from "react-native";

import MapView from "react-native-maps";

import Carousel from 'react-native-snap-carousel';

import Header from "../../components/Header"
import { BLACK, RED, YELLOW, WHITE, DARK_GREY, LIGHT_GREY } from '../../assets/colors'
import { string } from "../../assets/strings"

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 3;
const CARD_WIDTH = CARD_HEIGHT;

export default class BookingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    img: require("../../assets/imgs/1.jpg"),
                    title: "Pizza",
                    price: "12.000",
                },
                {
                    img: require("../../assets/imgs/5.jpg"),
                    title: "Pizaasd asd za",
                    price: "12.000",
                },
                {
                    img: require("../../assets/imgs/3.jpg"),
                    title: "Pizza",
                    price: "12.000",
                },
                {
                    img: require("../../assets/imgs/4.jpg"),
                    title: "Pizza",
                    price: "12.000",
                },
                {
                    img: require("../../assets/imgs/5.jpg"),
                    title: "Pizza",
                    price: "12.000",
                },
            ],
            time: ["12:00", "12:30", "14:00", "17:00", "24:00", "16:00"],
            timeSelected: 0
        }
    }


    _renderViews({ item, index }) {
        return (
            <View style={{
                backgroundColor: LIGHT_GREY,
                borderRadius: 15,
                height: 200,
                marginLeft: 25,
                marginRight: 25,
            }}>
                <Image
                    source={item.img}
                    style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: 15
                    }}
                    resizeMode="cover"
                />

            </View>

        )
    }

    _renderMenu({ item, index }) {
        return (
            <View style={{
                flex: 1,

                alignItems: "center",
            }}>
                <View style={{ alignItems: "center", backgroundColor: YELLOW, padding: 5, borderRadius: 40 }}>
                    <Image
                        source={item.img}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 35
                        }}
                    />
                    <Text style={{ fontFamily: "MSB", fontSize: 14, marginTop: 15, width: 40, textAlign: "center" }}>{item.title}</Text>
                    <Text style={{ fontFamily: "MSB", fontSize: 12, marginTop: 5, color: WHITE }}>{item.price}</Text>
                    <Text style={{ fontFamily: "MSB", fontSize: 10, color: WHITE, marginBottom: 5 }}>VND</Text>


                    <View style={{
                        height: 57, width: 25,
                        backgroundColor: LIGHT_GREY,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 13,
                        position: "absolute",
                        zIndex: 4,
                        right: -13,
                        bottom: 10
                    }}>
                        <TouchableOpacity style={{ height: 20, width: 25, justifyContent: "center", alignItems: "center" }}
                        >
                            <Text style={{ color: DARK_GREY, fontFamily: "MSB" }}>+</Text>
                        </TouchableOpacity>

                        <Text style={{ color: BLACK, fontFamily: "MSB" }}>0</Text>

                        <TouchableOpacity style={{ height: 17, width: 25, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: DARK_GREY, fontFamily: "MSB", marginBottom: 5 }}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        )
    }


    render() {
        const { timeSelected } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: WHITE }}>
                <Text style={{ marginLeft: 45, fontFamily: "MSB", fontSize: 27, marginTop: 45, color: YELLOW }}>Đặt bàn</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginLeft: 45, fontFamily: "MSB", fontSize: 20 }}>Nhà hàng </Text>
                    <Text style={{ fontFamily: "MSB", fontSize: 20, color: RED }}>Biển Lớn</Text>

                </View>


                <ScrollView style={{ flex: 1, marginBottom: 40, marginTop: 20 }}>

                    <View style={{
                        marginLeft: 60,
                        marginRight: 60
                    }}>
                        <View style={[styles.componentContainer, { marginLeft: 0, marginRight: 0 }]}>
                            <Text style={styles.component}>Trạng thái bàn</Text>
                            <Text style={[styles.component, { fontFamily: "MR", fontSize: 12 }]}>còn 2 bàn trống</Text>

                        </View>
                        <View style={{ width: "100%", height: 150, backgroundColor: "gray" }}></View>
                        <Text style={[styles.component, { fontFamily: "MSB", fontSize: 12, color: DARK_GREY }]}>4 ghế / bàn</Text>
                        <Text style={[styles.component, { fontFamily: "MR", fontSize: 12 }]}>Bấm vào hình để chọn bàn</Text>
                    </View>


                    <View style={{
                        marginLeft: 60,
                        marginRight: 60
                    }}>
                        <View style={[styles.componentContainer, { marginLeft: 0, marginRight: 0 }]}>
                            <Text style={styles.component}>Giờ</Text>
                        </View>
                        <ScrollView style={{ marginTop: 10 }} horizontal>
                            {this.state.time.map((time, index) => (
                                <View style={{ marginRight: 5 }}>
                                    <TouchableOpacity
                                        key={index}
                                        style={{
                                            borderRadius: 20,
                                            borderWidth: 1,
                                            borderColor: timeSelected == index ? RED : DARK_GREY,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            paddingTop: 3,
                                            paddingBottom: 4,
                                            backgroundColor: timeSelected == index ? RED : WHITE,
                                            marginBottom: 5
                                        }}
                                        onPress={() => this.setState({ timeSelected: index })}
                                    >
                                        <Text style={{ fontFamily: "MR", fontSize: 12, color: timeSelected == index ? WHITE : DARK_GREY, }}>{time}</Text>
                                    </TouchableOpacity>
                                </View>

                            ))}
                        </ScrollView>
                    </View>


                    <View style={{
                        marginLeft: 60,
                        marginRight: 60
                    }}>
                        <View style={[styles.componentContainer, { marginLeft: 0, marginRight: 0 }]}>
                            <Text style={styles.component}>Views</Text>
                            <Text style={[styles.component, { fontFamily: "MR", fontSize: 12 }]}>vuốt trái để xem</Text>
                        </View>
                        <View style={{ marginTop: 20 }}>

                            <Carousel
                                layout={"tinder"}
                                ref={ref => this.carousel = ref}
                                data={this.state.carouselItems}
                                sliderWidth={Dimensions.get("window").width - 120}
                                itemWidth={Dimensions.get("window").width - 120}
                                renderItem={this._renderViews}
                                onSnapToItem={index => this.setState({ activeIndex: index })} />
                        </View>

                    </View>


                    <View style={{
                        marginLeft: 60,
                        marginRight: 60
                    }}>
                        <View style={[styles.componentContainer, { marginLeft: 0, marginRight: 0 }]}>
                            <Text style={styles.component}>Menu</Text>

                        </View>
                        <View style={{ marginTop: 20 }}>

                            <Carousel
                                layout={"default"}
                                ref={ref => this.carousel = ref}
                                data={this.state.carouselItems}
                                sliderWidth={Dimensions.get("window").width - 120}
                                itemWidth={100}
                                renderItem={this._renderMenu}
                                onSnapToItem={index => this.setState({ activeIndex: index })}
                                style={{ marginRight: 25 }}

                            />
                        </View>

                    </View>





                    <TouchableOpacity
                        style={{
                            marginTop: 40,
                            height: 70,
                            width: Dimensions.get("window").width - 100,
                            marginLeft: 100,
                            backgroundColor: YELLOW,
                            borderTopLeftRadius: 35,
                            borderBottomLeftRadius: 35,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Text style={{ fontFamily: "MSB", color: WHITE, fontSize: 20 }}>Đặt ngay</Text>
                    </TouchableOpacity>

                </ScrollView>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        marginLeft: 45,
        marginTop: 45,
        marginBottom: 20
    },
    input: {
        height: 40,
        marginTop: 15,
        // width: 230,
        marginLeft: 60,
        marginRight: 60,
        fontFamily: 'QsBold'
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
    component: {
        fontFamily: "MSB",
        color: BLACK,
        fontSize: 16
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
    addBtn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    addText: {
        fontFamily: "MSB",
        fontSize: 14,
        color: DARK_GREY,
        marginBottom: 4
    },
});