//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Header from './Header';
import Images from '../Assets/Images/Index'

// create a component
const AddNewPost = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AddPostHeader navigation={navigation} />
        </View>
    );
};

const AddPostHeader = ({ navigation }) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
                width: '15%',
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
            }}>
            <Image style={{
                width: 20,
                height: 20,
                tintColor: Colors.white
            }} source={Images.BackIcon} />
        </TouchableOpacity>
        <View style={{
            width: '70%',
            alignItems: 'center'
        }}>
            <Text style={{
                color: Colors.white,
                fontWeight: '600',
                fontSize: 18
            }}>{'Heading'}</Text>
        </View>
        <View style={{
            width: '70%',
            alignItems: 'center'
        }}>
            <Text style={{
                color: Colors.white,
                fontWeight: '600',
                fontSize: 18
            }}>{'Next'}</Text>
        </View>
    </View>
)

// define your styles
const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        backgroundColor: Colors.SocialButtonColor,
        height: moderateScale(80),
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomColor: Colors.GreyText,
        borderWidth: 0.5
    },
    headerText: {
        fontWeight: '700',
        fontSize: 20,
        color: 'black'
    }
});

//make this component available to the app
export default AddNewPost;
