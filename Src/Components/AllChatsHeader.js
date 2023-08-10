import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Images from '../Assets/Images/Index'
import Colors from '../Utiles/Colors'
import LinearGradient from 'react-native-linear-gradient'

const AllChatsHeader = (props) => {
    const {
        placeholder,
        value,
        onChangeText,
        onBackPress
    } = props
    return (
        <View style={styles.mainContainer}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: "space-between",
                marginTop: 20
            }}>
                <View style={{
                    width: "60%",
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
                    <Text style={{ fontSize: 28, fontWeight: '600', color: Colors.white }}>
                        {'Chat'}</Text>

                </View>
                <View style={{
                    width: '40%',
                    alignItems: "center",
                    flexDirection: 'row',
                    justifyContent: "space-between",
                }}>

                    <TouchableOpacity style={styles.RightIcons}>
                        <Image style={{
                            width: 24,
                            height: 24,
                            tintColor: Colors.white
                        }} source={Images.EditMessage} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <LinearGradient colors={[Colors.AppButtonColor1, Colors.AppButtonColor2]}
                            style={[styles.RightIcons, {
                                borderRadius: 50
                            }]}
                        >
                            <Image style={{
                                width: 20,
                                height: 20,
                                tintColor: Colors.white
                            }} source={Images.Comment2} />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.RightIcons, {
                        backgroundColor: '#1E2533',
                        borderRadius: 50
                    }]}>
                        <Image style={{
                            width: 24,
                            height: 24,
                            tintColor: Colors.white
                        }} source={Images.Phone} />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{
                width: '90%',
                alignSelf: "center",
                flexDirection: 'row',
                alignItems: "center",
                paddingHorizontal: 10,
                backgroundColor: Colors.Background,
                height: 52,
                marginTop: 30,
                borderRadius: 20
            }}>
                <Image style={{ width: 20, height: 20 }}
                    source={Images.Search} />
                <TextInput
                    style={{
                        color: Colors.white,
                        marginLeft: 10,
                        fontSize: 16,
                        fontWeight: '500'
                    }}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.GreyText}
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    )
}

export default AllChatsHeader

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        backgroundColor: '#191D2B',
        height: "25%",
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