import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utiles/Colors'
import Images from '../Assets/Images/Index'

const ProfileHeader = (props) => {
    const {
        Username
    } = props
    return (
        <View style={styles.mainContainer}>
            <View style={{
                width: "50%",
                flexDirection: "row",
                alignItems: 'center'
            }}>
                <View
                    style={{
                        width: 34,
                        justifyContent: 'center',
                        height: 50,
                    }}>
                    <Image style={{
                        width: 27,
                        height: 34,
                    }} source={Images.SynergyIcon} />
                </View>
                <Text style={{ fontSize: 20, fontWeight: '600', color: Colors.white }}>
                    {Username}</Text>
                <View
                    style={{
                        width: 20,
                        justifyContent: 'center',
                        height: 50,
                    }}>
                    <Image style={{
                        width: 20,
                        height: 15,
                        tintColor: Colors.white,
                        transform: [{ rotate: '270deg' }],
                        marginLeft: 10
                    }} source={Images.BackIcon} />
                </View>
            </View>
            <View style={{
                width: '40%',
                alignItems: "center",
                flexDirection: 'row',
                justifyContent: "space-between"
            }}>
                <TouchableOpacity style={styles.RightIcons}>
                    <Image style={{
                        width: 24,
                        height: 24,
                        tintColor: Colors.white
                    }} source={Images.Refresh} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.RightIcons}>
                    <Image style={{
                        width: 24,
                        height: 24,
                        tintColor: Colors.white
                    }} source={Images.Add} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.RightIcons}>
                    <Image style={{
                        width: 24,
                        height: 27,
                        tintColor: Colors.white
                    }} source={Images.postOptions} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileHeader

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        backgroundColor: '#191D2B',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 10
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