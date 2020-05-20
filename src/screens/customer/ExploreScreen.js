import React, { Component } from "react";
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    TextInput,
    Animated,
    Image,
    Dimensions,
    TouchableOpacity,
    Modal,

} from "react-native";

import MapView from "react-native-maps";

import Carousel from 'react-native-snap-carousel';
import BookingModal from "./BookingModal"
import { WHITE, RED, LIGHT_GREY, DARK_GREY, YELLOW, BLACK } from "../../assets/colors";



const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 3;
const CARD_WIDTH = CARD_HEIGHT;

export default class ExploreScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselImgs: [
                {
                    img: require("../../assets/imgs/g1.jpg"),
                },
                {
                    img: require("../../assets/imgs/g2.jpg"),
                },
                {
                    img: require("../../assets/imgs/g3.jpg"),
                },
                {
                    img: require("../../assets/imgs/g4.png"),
                },
                {
                    img: require("../../assets/imgs/g5.png"),
                },
            ],
        }
    }

    _renderViews({ item, index }) {
        return (
            <View style={{
                backgroundColor: LIGHT_GREY,
                borderRadius: 15,
                height: 300,
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

    render() {


        return (
            <View style={{ flex: 1, backgroundColor: WHITE }}>
                <View style={{
                    position: "absolute",
                    zIndex: 0,
                    backgroundColor: LIGHT_GREY,
                    width: 500,
                    height: 500,
                    borderRadius: 250,
                    right: -250,
                    top: -250
                }} />




                <Text style={{ marginLeft: 45, fontFamily: "MSB", fontSize: 27, marginTop: 45, color: YELLOW }}>Khám phá</Text>
                <View style={{ height: 320, justifyContent: "center", marginTop: 70 }}>
                    <Carousel
                        layout={"tinder"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselImgs}
                        sliderWidth={Dimensions.get("window").width}
                        itemWidth={Dimensions.get("window").width - 40}
                        renderItem={this._renderViews}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />

                </View>
                <View style={{ flexDirection: "row", marginLeft: 60, marginRight: 60, justifyContent: "space-between" }}>
                    <TouchableOpacity style={{
                        height: 100, width: 100,
                        borderColor: RED,
                        height: 40, borderWidth: 2,
                        borderRadius: 50,
                        backgroundColor: RED,
                        justifyContent: "center", alignItems: "center"
                    }}>
                        <Text style={{ fontFamily: "MSB", fontSize: 14, color: WHITE }} >Quan tâm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 100, width: 100,
                        borderColor: YELLOW,
                        height: 40, borderWidth: 2,
                        borderRadius: 50,
                        backgroundColor: YELLOW,
                        justifyContent: "center", alignItems: "center"
                    }}>
                        <Text style={{ fontFamily: "MSB", fontSize: 14, color: WHITE }} >Bỏ qua</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ backgroundColor: RED, height: 30 }}>
                        <Text>Bỏ qua</Text>
                    </TouchableOpacity> */}
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({

});