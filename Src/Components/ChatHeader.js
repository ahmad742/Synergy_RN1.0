import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utiles/Colors'
import Images from '../Assets/Images/Index'

const ChatHeader = (props) => {
    const {
        Username,
        userProfile,
        status,
        onBackPress,
        onVideoPress
    } = props
    return (
        <View style={styles.mainContainer}>
            <View style={{
                width: "65%",
                flexDirection: "row",
                alignItems: 'center',
            }}>
                <TouchableOpacity
                    onPress={onBackPress}
                    style={{
                        width: 40,
                        justifyContent: 'center',
                        height: 50,
                    }}>
                    <Image style={{
                        width: 20,
                        height: 15,
                        tintColor: Colors.white,
                        marginLeft: 10
                    }} source={Images.BackIcon} />
                </TouchableOpacity>
                <View
                    style={{
                        width: 60,
                        justifyContent: 'center',
                        height: 50,
                    }}>
                    <Image style={{
                        width: 50,
                        height: 50,
                        borderRadius: 100
                    }} source={Images.ProfileImage} />
                </View>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: '700', color: Colors.white }}>
                        {Username}</Text>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.white }}>
                        {status}</Text>
                </View>

            </View>
            <View style={{
                width: '35%',
                alignItems: "center",
                flexDirection: 'row',
                justifyContent: "space-between",
            }}>
                <TouchableOpacity style={styles.RightIcons}>
                    <Image style={{
                        width: 24,
                        height: 24,
                        tintColor: Colors.white
                    }} source={Images.Phone} />
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={onVideoPress}
                style={styles.RightIcons}>
                    <Image style={{
                        width: 24,
                        height: 24,
                        tintColor: Colors.white
                    }} source={Images.VideoCamera} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.RightIcons}>
                    <Image style={{
                        width: 24,
                        height: 27,
                        tintColor: Colors.white
                    }} source={Images.Info} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatHeader

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        backgroundColor: '#191D2B',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.GreyText
    },
    RightIcons: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: "center",
    }
})