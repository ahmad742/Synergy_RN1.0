import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Images from '../Assets/Images/Index'
import Colors from '../Utiles/Colors'

const Header = (props) => {
    const { Heading, onBackPress, Backicon, RightText, Lefticon } = props
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                onPress={onBackPress}
                style={{
                    width: '15%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50,
                }}>
                {
                    Backicon &&
                    <Image style={{
                        width: 20,
                        height: 20,
                        tintColor: Colors.white
                    }} source={Backicon} />
                }
                {
                    RightText &&
                    <Text style={{
                        color: Colors.GreyText,
                        fontWeight: '600',
                        fontSize: 18,
                        marginLeft: 20
                    }}>
                        {RightText}
                    </Text>
                }

            </TouchableOpacity>
            <View style={{
                width: '70%',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: Colors.white,
                    fontWeight: '600',
                    fontSize: 18
                }}>{Heading}</Text>
            </View>
            {
                Lefticon &&
                <TouchableOpacity>
                    <Image style={{
                        width: 40,
                        height: 40,
                    }} source={Lefticon} />
                </TouchableOpacity>
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        backgroundColor: Colors.SocialButtonColor,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomColor: Colors.GreyText,
        borderWidth: 0.5
    }
})