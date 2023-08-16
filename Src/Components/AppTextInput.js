import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Images from '../Assets/Images/Index'
import Colors from '../Utiles/Colors'

const AppTextInput = (props) => {
    const {
        placeholder,
        value,
        onChangeText,
        LeftIcon,
        rightIcon,
        secureTextEntry,
        onRightIconPress
    } = props

    return (
        <View style={{
            flexDirection: 'row',
            alignItems: "center",
            paddingHorizontal: 20,
            backgroundColor: Colors.SocialButtonColor,
            marginTop: 20,
            borderRadius: 12,
            width: '90%',
            alignSelf: 'center'
        }}>
            <Image style={{ width: 15, height: 15, tintColor: Colors.white }}
                source={LeftIcon}
            />
            <TextInput
                keyboardType='email-address'
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={Colors.GreyText}
                style={{
                    width: "80%",
                    marginLeft: 20,
                    height: 52,
                    color: Colors.white
                }}
                secureTextEntry={secureTextEntry}
            />
            {
                rightIcon &&
                <TouchableOpacity onPress={onRightIconPress}>
                    <Image style={{ width: 18, height: 18, tintColor: Colors.white }}
                        source={rightIcon}
                    />
                </TouchableOpacity>
            }

        </View>

    )
}

export default AppTextInput

const styles = StyleSheet.create({})