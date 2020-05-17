import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native"

import { BLACK, RED, YELLOW, WHITE, DARK_GREY, LIGHT_GREY } from '../../assets/colors'
import { string } from "../../assets/strings"
import Dashboard from "./Dashboard"
import Order from "./Order"
import Tab from "../../components/Tab"

import { Transition, Transitioning } from "react-native-reanimated"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 0,

        }

        this.ref = React.createRef()
    }

    selectedTab = tabIndex => {
        this.ref.current.animateNextTransition()
        this.setState({ selectedTab: tabIndex })
    }

    transition = (
        <Transition.Together>
            <Transition.In
                type="slide-right"
                durationMs={300}
                interpolation="easeInOut" />
            <Transition.In
                type="fade"
                durationMs={300}
            />
            <Transition.Change />
        </Transition.Together>
    )

    componentDidMount = () => {
        this.ref.current.animateNextTransition()
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: WHITE }}>

                <Transitioning.View style={{ flex: 1 }}
                    ref={this.ref}
                    transition={this.transition}
                >
                    {this.state.selectedTab == 0 ? (
                        <Dashboard />
                    ) : (
                            <Order />
                        )}

                    <View style={{ ...styles.tabContainer }}>
                        <View
                            style={[
                                {
                                    position: "absolute",
                                    height: 70,
                                    width: Dimensions.get("window").width / 2,
                                    backgroundColor: RED,
                                    left: this.state.selectedTab == 0 ? 0 : null,
                                    right: this.state.selectedTab == 1 ? 0 : null
                                }
                            ]}
                        />

                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => this.selectedTab(0)}
                        >
                            <Tab
                                uri={require("../../assets/imgs/restaurant.png")}
                                name={string.restaurant}
                                isSelected={this.state.selectedTab == 0 ? true : false} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => this.selectedTab(1)}
                        >
                            <Tab
                                uri={require("../../assets/imgs/order.png")}
                                name={string.order}
                                isSelected={this.state.selectedTab == 1 ? true : false} />
                        </TouchableOpacity>

                    </View>


                </Transitioning.View>


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

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabContainer: {
        height: 60,
        flexDirection: "row",
        width: Dimensions.get("window").width,
        backgroundColor: LIGHT_GREY,
        overflow: "hidden",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    imageContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    }
});

export default Home