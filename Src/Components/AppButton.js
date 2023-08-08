import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../Utiles/Colors'
import Images from '../Assets/Images/Index'

const AppButton = (props) => {

    const {
        ButtonText,
        ButtonStyle,
        onPress,
        RightIcon
    } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.ButtonStyle, ButtonStyle]}>
            <LinearGradient colors={[Colors.AppButtonColor1, Colors.AppButtonColor2]}
                style={[styles.ButtonStyle, {
                    flexDirection: "row",
                    alignItems: 'center'
                }]}
            >
                <Text style={styles.buttonText}>
                    {ButtonText}
                </Text>
                {
                    RightIcon &&
                    <Image
                        style={{ width: 20, height: 20, tintColor: Colors.white, marginLeft: 10 }}
                        source={RightIcon} />
                }
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    ButtonStyle: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 50,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: '700'
    }
})