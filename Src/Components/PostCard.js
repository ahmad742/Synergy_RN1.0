import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../Utiles/Colors'
import Images from '../Assets/Images/Index'

const PostCard = (props) => {

    const {
        ProfileImage,
        UserName,
        CountryName,
        PostImage,
        Description,
        Likes,
        Comments
    } = props

    return (
        <View style={{
            width: '90%',
            alignSelf: "center",
            marginTop:30
        }}>
            <View style={{
                width: "100%",
                alignSelf: "center",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <View style={{
                    width: "20%",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image style={{ width: 48, height: 48 }} source={ProfileImage} />
                </View>
                <View style={{
                    width: '70%',
                }}>
                    <Text style={{ fontSize: 18, fontWeight: "600", color: Colors.white, lineHeight: 20 }}>{UserName}</Text>
                    <Text style={{ fontSize: 14, fontWeight: "500", color: Colors.GreyText }}>{CountryName}</Text>
                </View>
                <TouchableOpacity style={{
                    width: "10%",
                    alignItems: 'center',
                    justifyContent: "center",
                }}>
                    <Image style={{ width: 22, height: 22 }} source={Images.postOptions} />
                </TouchableOpacity>
            </View>
            <View style={{
                width: '100%',
                height: 360,
                marginTop: 15,
            }}>
                <Image style={{ width: '100%', height: "100%", borderRadius: 20 }} source={PostImage} />
            </View>
            <View style={{
                width: "100%",
                marginTop: 10
            }}>
                <Text style={{ fontSize: 16, fontWeight: "400", color: Colors.white, lineHeight: 24 }}>{Description}</Text>
            </View>
            <View style={{
                width: "100%",
                alignSelf: "center",
                height: 48,
                backgroundColor: Colors.SocialButtonColor,
                borderRadius: 12,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal:20,
                marginTop:20
            }}>
                <View style={{
                    width: "30%",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Image source={Images.Redheart}
                        style={{ width: 20, height: 18 }}
                    />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: Colors.white,
                        marginLeft:10
                    }}>
                        {Likes}
                    </Text>
                </View>
                <View style={{
                    width: "30%",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Image source={Images.Comment}
                        style={{ width: 20, height: 20 }}
                    />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: Colors.white,
                        marginLeft:10
                    }}>
                        {Comments}
                    </Text>
                </View>
                <TouchableOpacity style={{
                    width: "30%",
                }}>
                    <Image source={Images.Share}
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: "15%",
                    backgroundColor:"#D9E2FF0D",
                    alignItems: "center",
                    height:40,
                    justifyContent:'center',
                    borderRadius:10,
                }}>
                    <Image source={Images.Bookmark}
                        style={{ width: 18, height: 20 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PostCard

const styles = StyleSheet.create({})