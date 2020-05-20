import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native"

import { BLACK, RED, YELLOW, WHITE, DARK_GREY, LIGHT_GREY } from '../../assets/colors'
import { string } from "../../assets/strings"
import Header from "../../components/Header"
import TableBookingItem from "../../components/TableBookingItem"
import Collapsible from 'react-native-collapsible'

class Order extends Component {
    constructor(props) {
        super(props)

    }

    state = {
        activeSections: [],
        collapsed: true,
        multipleSelect: false,
    };

    toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    render() {
        const user = [
            {
                name: "Nguyen Son Ha",
                time: "12:00",
                price: "15.000 VND",
                orders: [
                    require("../../assets/imgs/a1.jpg"),
                    require("../../assets/imgs/a2.jpg"),
                    require("../../assets/imgs/a3.jpg"),
                    require("../../assets/imgs/a4.jpg"),

                ]
            },
            // {
            //     name: "asdasd",
            //     time: "12 A.M",
            //     price: "15.000 VND",
            //     orders: [
            //         { "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
            //         { "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg" },
            //         { "https://www.expatica.com/app/uploads/sites/5/2020/03/Boeuf-bourguignon-1920x1080.jpg" },
            //         { "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/healthy_porridge_bowl.jpg" },
            //         { "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg" },
            //     ]
            // },
            // {
            //     name: "asdasd",
            //     time: "12 A.M",
            //     price: "15.000 VND",
            //     orders: [
            //         { "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
            //         { "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg" },
            //         { "https://www.expatica.com/app/uploads/sites/5/2020/03/Boeuf-bourguignon-1920x1080.jpg" },
            //         { "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/healthy_porridge_bowl.jpg" },
            //         { "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg" },
            //     ]
            // },
            // {
            //     name: "adasd",
            //     time: "12 A.M",
            //     price: "15.000 VND",
            //     orders: [
            //         { "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" },
            //         { "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg" },
            //         { "https://www.expatica.com/app/uploads/sites/5/2020/03/Boeuf-bourguignon-1920x1080.jpg" },
            //         { "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/healthy_porridge_bowl.jpg" },
            //         { "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg" },
            //     ]
            // },

        ]

        return (
            <View style={{ flex: 1, backgroundColor: WHITE }}>
                <Header restaurantName="The Pizza" type="Đơn hàng" />

                <ScrollView >

                    <View style={styles.componentContainer}>
                        <Text style={styles.component}>{string.tableBooking}</Text>
                    </View>

                    {user.map((user, i) => (

                        <TableBookingItem key={i} username={user.name} time={user.time} />

                    ))}


                    <View style={styles.componentContainer}>
                        <Text style={styles.component}>{string.foodOrder}</Text>
                    </View>

                    {user.map((user, i) => (

                        <View
                            style={{
                                marginLeft: 60, marginRight: 60,
                                backgroundColor: WHITE,
                                borderRadius: 10,
                                alignItems: "center",
                                marginTop: 5
                            }}>
                            <TouchableOpacity
                                style={{
                                    width: "100%",
                                    backgroundColor: LIGHT_GREY,
                                    height: 40,
                                    borderRadius: 10,
                                    justifyContent: "center",
                                }} onPress={this.toggleExpanded}>
                                <View style={styles.header}>
                                    <Text style={{
                                        marginLeft: 25,
                                        fontFamily: "MSB",
                                        fontSize: 12,
                                        color: BLACK
                                    }}>{user.name}</Text>
                                </View>
                            </TouchableOpacity>
                            <Collapsible collapsed={this.state.collapsed}>
                                <View style={{ flexDirection: "row", marginTop: 3 }}>

                                    <Image
                                        source={require("../../assets/imgs/f1.jpg")}
                                        style={{ width: 40, height: 40, marginRight: 3, borderRadius: 5 }}
                                        resizeMode="cover"
                                    />
                                    <Image
                                        source={require("../../assets/imgs/f2.jpg")}
                                        style={{ width: 40, height: 40, borderRadius: 5, marginRight: 3 }}
                                        resizeMode="cover"
                                    />
                                    <Image
                                        source={require("../../assets/imgs/f3.jpg")}
                                        style={{ width: 40, height: 40, borderRadius: 5, marginRight: 3 }}
                                        resizeMode="cover"
                                    />
                                    <Image
                                        source={require("../../assets/imgs/f4.jpg")}
                                        style={{ width: 40, height: 40, borderRadius: 5, marginRight: 3 }}
                                        resizeMode="cover"
                                    />
                                    {/* })} */}
                                </View>

                                {/* </View> */}
                            </Collapsible>
                        </View>

                    ))}
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


export default Order