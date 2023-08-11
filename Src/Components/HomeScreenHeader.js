import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Images from '../Assets/Images/Index'
import Colors from '../Utiles/Colors'
import { moderateScale } from 'react-native-size-matters'

const HomeScreenHeader = (props) => {
    const { Heading, onBackPress, Backicon, RightText, Lefticon } = props
    return (
        <View style={styles.mainContainer}>
            <View
                style={{
                    width: '50%',
                    justifyContent: 'center',
                    height: 50,
                }}>
                <Image style={{
                    width: moderateScale(200),
                    height: 40,
                }} source={Images.SynergyHeader} />
            </View>
            <View style={{
                width:'40%',
                alignItems:"center",
                flexDirection:'row',
                justifyContent:"space-between"
            }}>
                <TouchableOpacity style={styles.RightIcons}>
                    <Image style={{
                        width: 24,
                        height: 24,
                    }} source={Images.Bag} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.RightIcons}>
                    <Image style={{
                        width: 24,
                        height: 24,
                    }} source={Images.Heart} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.RightIcons}>
                    <Image style={{
                        width: 24,
                        height: 24,
                    }} source={Images.Message} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreenHeader

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
        borderWidth: 0.5,
        justifyContent: "space-between",
        paddingHorizontal:10
    },
    RightIcons: {
        width: 44,
        height: 44,
        borderRadius: 50,
        backgroundColor: '#1E2533',
        justifyContent: 'center',
        alignItems: "center"
    }
})