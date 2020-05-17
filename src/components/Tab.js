import React from "react";
import { View, Image, Text } from "react-native";
const Tab = ({ uri, isSelected, name }) => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
        <Image
            source={uri}
            style={{
                width: 30,
                height: 30
            }}
            resizeMode="contain"
        />
        <Text style={{ fontFamily: "MSB", color: "white" }}>{name}</Text>
    </View>
);
export default Tab;