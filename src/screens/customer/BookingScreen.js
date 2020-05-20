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
import { WHITE, RED, LIGHT_GREY, DARK_GREY, YELLOW } from "../../assets/colors";

import staticData from "./staticData";

const Images = [
    { uri: "https://vcdn-kinhdoanh.vnecdn.net/2019/05/10/DSC1294-1-6462-1557483506.jpg" },
    { uri: "https://images.foody.vn/res/g78/776631/prof/s576x330/foody-upload-api-foody-mobile-tch-jpg-180910161542.jpg" },
    { uri: "https://danang.plus/wp-content/uploads/2019/08/nguyen-gia-trang.jpg" },
    { uri: "https://media-cdn.tripadvisor.com/media/photo-s/11/85/82/d7/20171215-190519-largejpg.jpg" }
]

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 3;
const CARD_WIDTH = CARD_HEIGHT;

export default class BookingScreen extends Component {
    state = {
        markers: [
            {
                coordinate: {
                    latitude: 16.0542709,
                    longitude: 108.237581
                },
                title: "The Pizza",
                text: "The best Pizza you ever try!",
                image: Images[0],
            },
            {
                coordinate: {
                    latitude: 16.06069,
                    longitude: 108.2196334
                },
                title: "The Coffee",
                text: "The Coffee",
                image: Images[1],
            },
            {
                coordinate: {
                    latitude: 15.9670339,
                    longitude: 108.1942339
                },
                title: "Quán Nhậu Đồng Quê",
                text: "Good food, cheap, beautiful waitres.",
                image: Images[2],
            },
            {
                coordinate: {
                    latitude: 15.8800223,
                    longitude: 108.3245599
                },
                title: "Pizza Oi",
                text: "This is the best pizza restaurant",
                image: Images[3],
            },
        ],
        region: {
            latitude: 15.9670453,
            longitude: 108.2598977,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
        activeIndex: 0,
        modalVisible: false,
        search: "",
    };

    UNSAFE_componentWillMount() {
        this.index = 0;
        this.animation = new Animated.Value(0);
    }
    componentDidMount() {
        this.animation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3);
            if (index >= this.state.markers.length) {
                index = this.state.markers.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }

            clearTimeout(this.regionTimeout);
            this.regionTimeout = setTimeout(() => {
                if (this.index !== index) {
                    this.index = index;
                    const { coordinate } = this.state.markers[index];
                    this.map.animateToRegion(
                        {
                            ...coordinate,
                            latitudeDelta: this.state.region.latitudeDelta,
                            longitudeDelta: this.state.region.longitudeDelta,
                        },
                        350
                    );
                }
            }, 10);
        });
    }

    _renderItem({ item, index }) {
        return (
            <View style={{
                backgroundColor: 'blue',
                borderRadius: 5,
                height: 250,
                padding: 50,
                marginLeft: 25,
                marginRight: 25,
                position: "absolute"
            }}>
                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>)
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state;
        const interpolations = this.state.markers.map((marker, index) => {
            const inputRange = [
                (index - 1) * CARD_WIDTH,
                index * CARD_WIDTH,
                ((index + 1) * CARD_WIDTH),
            ];
            const scale = this.animation.interpolate({
                inputRange,
                outputRange: [1, 2.5, 1],
                extrapolate: "clamp",
            });
            const opacity = this.animation.interpolate({
                inputRange,
                outputRange: [0.35, 1, 0.35],
                extrapolate: "clamp",
            });
            return { scale, opacity };
        });

        return (
            <View style={styles.container}>

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

                <View style={{ height: 80, width: Dimensions.get("window").width, marginTop: 10 }}>
                    <View style={{
                        marginLeft: 25, marginRight: 25,
                        height: 50,
                        marginTop: 20, flexDirection: "row",
                        borderRadius: 10, borderColor: DARK_GREY,
                        borderWidth: 0.5,
                        alignItems: "center"
                    }}>
                        <View style={{
                            width: 30,
                            height: 30,
                            backgroundColor: RED,
                            justifyContent: 'center',
                            alignItems: "center",
                            borderRadius: 8,
                            marginLeft: 10
                        }}>
                            <Image
                                source={require("../../assets/imgs/search.png")}
                                style={{ width: 20, height: 20 }}
                            />
                        </View>

                        <Text style={{
                            fontFamily: "MR",
                            fontSize: 14,
                            color: DARK_GREY,
                            marginLeft: 10
                        }}>Tìm nhà hàng</Text>

                    </View>
                </View>

                <View style={{ width: Dimensions.get("window").width - 55, height: Dimensions.get("window").height - 80, marginTop: 10 }}>
                    <MapView
                        ref={map => this.map = map}
                        initialRegion={this.state.region}
                        style={{ width: Dimensions.get("window").width - 55, height: Dimensions.get("window").width - 55, borderRadius: 20 }}
                    >
                        {this.state.markers.map((marker, index) => {
                            const scaleStyle = {
                                transform: [
                                    {
                                        scale: interpolations[index].scale,
                                    },
                                ],
                            };
                            const opacityStyle = {
                                opacity: interpolations[index].opacity,
                            };
                            return (
                                <MapView.Marker key={index} coordinate={marker.coordinate}>
                                </MapView.Marker>
                            );
                        })}
                    </MapView>
                </View>

                <Animated.ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH + 60}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: this.animation,
                                    },
                                },
                            },
                        ],
                        { useNativeDriver: true }
                    )}
                    style={styles.scrollView}
                    contentContainerStyle={styles.endPadding}
                >
                    {this.state.markers.map((marker, index) => (
                        <View style={styles.card} key={index} onPress={() => {
                            this.setModalVisible(true);
                        }}>
                            <Image
                                source={marker.image}
                                style={styles.cardImage}
                                resizeMode="cover"
                            />
                            <View style={styles.textContent}>
                                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                                <Text style={styles.cardDescription}>
                                    {marker.text}
                                </Text>
                                <TouchableOpacity
                                    style={{
                                        width: 80, height: 30,
                                        backgroundColor: YELLOW,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: 15,
                                        right: 15,
                                        bottom: 15,
                                        position: "absolute"
                                    }}
                                    onPress={() => this.setModalVisible(true)}
                                >
                                    <Text style={{ fontFamily: "MR", color: WHITE, fontSize: 13 }}>Đặt bàn</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    ))}
                </Animated.ScrollView>

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
                            <BookingModal />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    scrollView: {
        position: "absolute",
        bottom: 70,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    endPadding: {
        paddingRight: width - CARD_WIDTH,
    },
    card: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginBottom: 20,
        height: CARD_HEIGHT,
        width: CARD_WIDTH + 40,
        overflow: "hidden",
        alignItems: "center"
    },
    cardImage: {
        flex: 1,
        width: "100%",
        height: "100%",
        borderRadius: 10
    },
    textContent: {
        flex: 1,
        height: "80%",
        width: "80%",
        backgroundColor: "#fcfcfc",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    cardtitle: {
        fontSize: 14,
        marginTop: 5,
        fontFamily: "MSB",
        marginLeft: 10,
        marginRight: 10
    },
    cardDescription: {
        fontSize: 12,
        color: DARK_GREY,
        fontFamily: "MR",
        marginLeft: 10,
        marginRight: 10

    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
    },
    marker: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "rgba(130,4,150, 0.9)",
    },
    ring: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "rgba(130,4,150, 0.3)",
        position: "absolute",
        borderWidth: 1,
        borderColor: "rgba(130,4,150, 0.5)",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: WHITE,
        fontFamily: "MR",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});