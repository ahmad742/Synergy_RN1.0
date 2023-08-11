//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

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
        <Text style={styles.headerText}>NewPost</Text>
    </View>
)

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingVertical:moderateScale(20)
    },
    headerContainer: {
       justifyContent:'center',
       alignItems:'center',
       width:'100%',
    },
    headerText: {
        fontWeight: '700',
        fontSize: 20,
        color: 'black'
    }
});

//make this component available to the app
export default AddNewPost;
