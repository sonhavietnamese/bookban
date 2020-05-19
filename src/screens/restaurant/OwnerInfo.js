import React, { Component } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native"

import { BLACK, RED, YELLOW, WHITE, DARK_GREY, LIGHT_GREY } from '../../assets/colors'
import { string } from "../../assets/strings"
import Reinput from 'reinput';
import FoodItem from "../../components/FoodItem";
import Home from "./Home"

import { NavigationContainer } from '@react-navigation/native'
import {
    createStackNavigator,
    CardStyleInterpolators
} from '@react-navigation/stack'
import InfoHeader from "../../components/InfoHeader";



class OwnerInfoScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            restaurantName: "",
            restaurantDes: "",
            numberOfTable: 10,
            chairEachTable: 4,
            isDelivery: true
        }
    }

    handleRestaurantName = text => {
        this.setState({ restaurantName: text });
    }

    handleRestaurantDes = text => {
        this.setState({ restaurantDes: text });
    }

    render() {
        const { restaurantName, restaurantDes, numberOfTable, chairEachTable, isDelivery } = this.state
        return (
            <View style={{
                flex: 1,
                backgroundColor: WHITE
            }}>



                <InfoHeader first="Nhà hàng" second="của tôi" />

                {/* <View style={styles.header}>
                    <Text style={{ fontFamily: "MB", fontSize: 27, color: YELLOW }} >Nhà hàng</Text>
                    <Text style={{ fontFamily: "MR", fontSize: 27, color: BLACK }} > của tôi.</Text>
                </View> */}


                <ScrollView style={{ flex: 1, marginBottom: 40 }}>

                    <Reinput
                        style={styles.input}
                        label={string.restaurantName}
                        value={restaurantName}
                        onChangeText={this.handleRestaurantName}
                        labelActiveColor={DARK_GREY}
                        color={RED}
                    />


                    <Reinput
                        style={styles.input}
                        label={string.restaurantDes}
                        value={restaurantDes}
                        onChangeText={this.handleRestaurantDes}
                        labelActiveColor={DARK_GREY}
                        color={RED}
                    />


                    <View style={styles.componentContainer}>
                        <Text style={styles.component}>{string.address}</Text>
                        <TouchableOpacity style={styles.plusBtn}>
                            <Text style={styles.plus}>+</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.componentContainer}>
                        <Text style={styles.component}>{string.openCloseTime}</Text>
                        <TouchableOpacity style={styles.plusBtn}>
                            <Text style={styles.plus}>+</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{
                        marginLeft: 60,
                        marginRight: 60
                    }}>
                        <View style={[styles.componentContainer, { marginLeft: 0, marginRight: 0 }]}>
                            <Text style={styles.component}>{string.views}</Text>
                            <TouchableOpacity style={styles.plusBtn}>
                                <Image
                                    source={require("../../assets/imgs/gallery.png")}
                                    style={{ width: 15, height: 15 }}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={{ marginTop: 15, }} horizontal>
                            <Image
                                source={require("../../assets/imgs/1.jpg")}
                                style={{ width: 90, height: 90, borderRadius: 15, marginRight: 5 }}
                            />
                            <Image
                                source={require("../../assets/imgs/2.jpg")}
                                style={{ width: 90, height: 90, borderRadius: 15, marginRight: 5 }}
                            />
                            <Image
                                source={require("../../assets/imgs/3.jpg")}
                                style={{ width: 90, height: 90, borderRadius: 15, marginRight: 5 }}
                            />
                            <Image
                                source={require("../../assets/imgs/4.jpg")}
                                style={{ width: 90, height: 90, borderRadius: 15, marginRight: 5 }}
                            />
                            <Image
                                source={require("../../assets/imgs/5.jpg")}
                                style={{ width: 90, height: 90, borderRadius: 15, marginRight: 5 }}
                            />
                        </ScrollView>

                    </View>


                    <View style={styles.componentContainer}>
                        <Text style={styles.component}>{string.numberOfTable}</Text>

                        <View style={{ flexDirection: "row", height: 30, backgroundColor: LIGHT_GREY, width: 90, justifyContent: "center", alignItems: "center", borderRadius: 20 }}>
                            <TouchableOpacity style={styles.addBtn}
                                onPress={() => this.setState({ numberOfTable: numberOfTable + 1 })}
                            >
                                <Text style={styles.addText}>+</Text>
                            </TouchableOpacity>
                            <Text style={{ fontFamily: "MSB", fontSize: 14, color: RED }}>{numberOfTable <= 0 ? this.setState({ numberOfTable: 1 }) : numberOfTable}</Text>
                            <TouchableOpacity style={styles.addBtn}
                                onPress={() => this.setState({ numberOfTable: numberOfTable - 1 })}
                            >
                                <Text style={styles.addText}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.componentContainer}>
                        <Text style={styles.component}>{string.chairEachTable}</Text>

                        <View style={{ flexDirection: "row", height: 30, backgroundColor: LIGHT_GREY, width: 90, justifyContent: "center", alignItems: "center", borderRadius: 20 }}>
                            <TouchableOpacity style={styles.addBtn}
                                onPress={() => this.setState({ chairEachTable: chairEachTable + 1 })}
                            >
                                <Text style={styles.addText}>+</Text>
                            </TouchableOpacity>
                            <Text style={{ fontFamily: "MSB", fontSize: 14, color: RED }}>{chairEachTable <= 0 ? this.setState({ chairEachTable: 1 }) : chairEachTable}</Text>
                            <TouchableOpacity style={styles.addBtn}
                                onPress={() => this.setState({ chairEachTable: chairEachTable - 1 })}
                            >
                                <Text style={styles.addText}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={{
                        marginLeft: 60,
                        marginRight: 60
                    }}>
                        <View style={[styles.componentContainer, { marginLeft: 0, marginRight: 0 }]}>
                            <Text style={styles.component}>{string.delivery}</Text>
                            <View style={{ width: 60, height: 30, borderRadius: 25, backgroundColor: LIGHT_GREY, alignItems: isDelivery ? "flex-end" : "flex-start" }}>
                                <TouchableOpacity
                                    style={{ width: 30, height: 30, borderRadius: 25, backgroundColor: isDelivery ? RED : YELLOW }}
                                    onPress={() => this.setState({ isDelivery: !isDelivery })}
                                />
                            </View>

                        </View>
                        <Text style={{ fontFamily: "MSB", color: DARK_GREY }}>{isDelivery ? string.yes : string.no}</Text>
                    </View>


                    <View style={{
                        marginLeft: 60,
                        marginRight: 60
                    }}>
                        <View style={[styles.componentContainer, { marginLeft: 0, marginRight: 0 }]}>
                            <Text style={styles.component}>{string.menu}</Text>
                            <TouchableOpacity style={styles.plusBtn}>
                                <Image
                                    source={require("../../assets/imgs/gallery.png")}
                                    style={{ width: 15, height: 15 }}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={{ marginTop: 15, }} horizontal>
                            <FoodItem
                                uri={require("../../assets/imgs/f1.jpg")}
                                name="Pizza"
                                price="12.000"
                            />
                            <FoodItem
                                uri={require("../../assets/imgs/f2.jpg")}
                                name="asdasfasdfasdf"
                                price="12.000"
                            />
                            <FoodItem
                                uri={require("../../assets/imgs/f3.jpg")}
                                name="Pizza"
                                price="12.000"
                            />
                            <FoodItem
                                uri={require("../../assets/imgs/f4.jpg")}
                                name="Bánh mì bơ tỏi"
                                price="999.000"
                            />
                            <FoodItem
                                uri={require("../../assets/imgs/f5.jpg")}
                                name="Pizza"
                                price="12.000"
                            />
                        </ScrollView>
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
                        onPress={() => this.props.navigation.navigate("RestaurantHomeScreen")}
                    >
                        <Text style={{ fontFamily: "MSB", color: WHITE, fontSize: 20 }}> {string.done} </Text>
                    </TouchableOpacity>

                </ScrollView>


            </View>
        )
    }
}


const Stack = createStackNavigator();

function OwnerInfo() {
    return (
        // <NavigationContainer>
        <Stack.Navigator
            headerMode="none"
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <Stack.Screen name='OwnerInfoScreen' component={OwnerInfoScreen} />
            <Stack.Screen name='RestaurantHomeScreen' component={Home} />
        </Stack.Navigator>
        // </NavigationContainer >
    )
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
})

export default OwnerInfo