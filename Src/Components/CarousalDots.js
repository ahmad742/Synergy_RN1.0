import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../Utiles/Colors';

const CarouselDots = (props) => {
    const dots = [];
    for (let index = 0; index < props.count; index++) {
        if (props.selectedIndex === index) {
            dots.push(
                <View key={index + 1} style={styles.dotsContainer}>
                    <View style={{
                        backgroundColor: Colors.white,
                        alignSelf: 'center',
                        width: 12,
                        height: 12,
                        borderRadius: 6
                    }} />
                </View>
            );
        } else {
            <View style={{ borderColor: Colors.GreyText }} />
            dots.push(
                <View key={index + 1} style={[styles.dotsContainer, { borderWidth: 0 }]}>
                    <View style={{
                        width: 9,
                        height: 9,
                        backgroundColor: Colors.GreyText,
                        borderRadius: 50,
                        borderColor: Colors.white,
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} />
                </View>
            );
        }
    }
    return (
        <View style={{ ...styles.container, ...props.style }}>
            <View style={{ flexDirection: 'row' }}>
                {dots}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 25,
    },
    dotsContainer: {
        marginRight: 4,
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: Colors.GreyText,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CarouselDots;
