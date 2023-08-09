import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text,
    FlatList,
    Pressable,
    ScrollView,
} from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Utiles/Colors'
import Images from '../../Assets/Images/Index'
import ProfileHeader from '../../Components/ProfileHeader'
import LinearGradient from 'react-native-linear-gradient'

const Profile = ({ navigation }) => {

    const [isFeeds, setIsFeeds] = useState(true)
    const [isTapes, setIsTapes] = useState(false)
    const [isTags, setIsTags] = useState(false)

    const FriendsData = [
        {
            id: 1,
            image: Images.image1,
            name: 'Facebook'
        },
        {
            id: 2,
            image: Images.image2,
            name: 'Facebook'
        },
        {
            id: 3,
            image: Images.image3,
            name: 'Facebook'
        },
        {
            id: 4,
            image: Images.image4,
            name: 'Facebook'
        },
        {
            id: 5,
            image: Images.image5,
            name: 'Facebook'
        },
    ]

    const _FriendsRenderItem = ({ item }) => {
        return (
            <View style={styles.flatListMainContainer}>
                <View style={styles.FriendsListInnerContainer}>
                    <TouchableOpacity style={styles.StoryItems}>
                        <Image style={{ width: 48, height: 48, borderRadius: 100 }} source={item.image} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.white }}>{item.name}</Text>
                </View>
            </View>
        )
    }

    const FeedsData = [

        {
            id: 1,
            image: Images.image1,
        },
        {
            id: 2,
            image: Images.image2,
        },
        {
            id: 3,
            image: Images.image3,
        },
        {
            id: 4,
            image: Images.image4,
        },
        {
            id: 5,
            image: Images.image5,
        },
        {
            id: 6,
            image: Images.image6,
        },
        {
            id: 7,
            image: Images.image1,
        },
        {
            id: 8,
            image: Images.image2,
        },
        {
            id: 9,
            image: Images.image3,
        },
        {
            id: 10,
            image: Images.image4,
        },
        {
            id: 11,
            image: Images.image5,
        },
        {
            id: 12,
            image: Images.image6,
        },
        {
            id: 13,
            image: Images.image1,
        },
        {
            id: 14,
            image: Images.image2,
        },
    ]
    const _FeedsRenderItem = ({ item }) => {
        return (
            <Pressable style={{
                width: "30%",
                height: 125,
                margin: 5
            }}>
                <Image source={item.image}
                    style={{ width: "100%", height: "100%", borderRadius: 15 }} />
            </Pressable>
        )
    }
    const _TapessRenderItem = ({ item }) => {
        return (
            <Pressable style={{
                width: "30%",
                height: 170,
                margin: 5

            }}>
                <Image source={item.image}
                    style={{ width: "100%", height: "100%", borderRadius: 15 }} />
            </Pressable>
        )
    }
    return (
        <SafeAreaView style={{
            backgroundColor: Colors.Background,
            flex: 1
        }}>
            <ProfileHeader
                Username='Usernameeedfs'
            />
            <ScrollView>
                <View style={{
                    width: '100%',
                    backgroundColor: "#191D2B",
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    borderBottomWidth: 0.5,
                    borderColor: Colors.GreyText
                }}>

                    <View
                        style={styles.userDataMainContainer}>
                        <View style={styles.profileImageConatiner}>
                            <Image source={Images.ProfileImage} style={{ width: 82, height: 82 }} />
                            <TouchableOpacity style={styles.editButton}>
                                <Image source={Images.Edit} style={{ width: 20, height: 20 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.userDataContainer}>
                            <Text style={styles.userDataTextWhite}>{'99 '}</Text>
                            <Text style={styles.userDataTextGrey}>{'Posts '}</Text>
                        </View>
                        <View style={styles.userDataContainer}>
                            <Text style={styles.userDataTextWhite}>{'22k '}</Text>
                            <Text style={styles.userDataTextGrey}>{'Followers '}</Text>
                        </View>
                        <View style={{
                            width: 88,
                            height: 60,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text style={styles.userDataTextWhite}>{'60 '}</Text>
                            <Text style={styles.userDataTextGrey}>{'Following '}</Text>
                        </View>
                    </View>
                    <LinearGradient

                        start={{ x: 4, y: 0.5 }} end={{ x: 0.5, y: 3 }}
                        colors={['#C9DEFF', '#191D2B']}
                        style={styles.userDescriptionContainer}>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.white, lineHeight: 24 }}>
                            {'Vitaliy Dorozhko - UI/UX Designer'}
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.GreyText, lineHeight: 20 }}>
                            {'Product Designer'}
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.white, lineHeight: 24, marginTop: 10 }}>
                            {'I create beautiful and user-friendly interactive interfaces'}
                        </Text>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.AppButtonColor1, lineHeight: 20, marginTop: 10 }}>
                            {'www.dribbble.com'}
                        </Text>
                    </LinearGradient>
                    <View style={styles.editProfileMainContainer}>
                        <TouchableOpacity style={styles.editProfileButton}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: Colors.white }}>{'Edit Profile'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AllMessages')}
                            style={styles.messageButton}>
                            <Image style={{ width: 17, height: 14, tintColor: Colors.white }}
                                source={Images.Email} />
                        </TouchableOpacity>
                        <TouchableOpacity

                            style={styles.messageButton}>
                            <Image style={{ width: 17, height: 14, tintColor: Colors.white }}
                                source={Images.Bag2} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.messageButton}>
                            <Image style={{ width: 17, height: 14, tintColor: Colors.white }}
                                source={Images.AddUser} />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        style={{
                            width: '90%',
                            alignSelf: "center",
                        }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={FriendsData}
                        renderItem={_FriendsRenderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={styles.tabbarContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            setIsFeeds(true),
                                setIsTags(false)
                            setIsTapes(false)
                        }}
                        style={[styles.tabbarstyle, {
                            borderBottomColor: isFeeds ? Colors.AppButtonColor1 : Colors.GreyText,
                            borderBottomWidth: isFeeds ? 3 : 1,

                        }]}>
                        <Image style={{
                            width: 20, height: 20, marginRight: 5,
                            tintColor: isFeeds ? Colors.white : Colors.GreyText
                        }} source={Images.Category} />
                        <Text style={{
                            fontSize: 18, fontWeight: '600',
                            color: isFeeds ? Colors.white : Colors.GreyText
                        }}>
                            {'Feeds'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setIsFeeds(false),
                                setIsTags(false)
                            setIsTapes(true)
                        }}
                        style={[styles.tabbarstyle, {
                            borderBottomColor: isTapes ? Colors.AppButtonColor1 : Colors.GreyText,
                            borderBottomWidth: isTapes ? 3 : 1,
                        }]}>
                        <Image style={{
                            width: 20, height: 20, marginRight: 5,
                            tintColor: isTapes ? Colors.white : Colors.GreyText
                        }} source={Images.Video} />
                        <Text style={{
                            fontSize: 18, fontWeight: '600',
                            color: isTapes ? Colors.white : Colors.GreyText
                        }}>
                            {'Tapes'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setIsFeeds(false),
                                setIsTags(true)
                            setIsTapes(false)
                        }}
                        style={[styles.tabbarstyle, {
                            borderBottomColor: isTags ? Colors.AppButtonColor1 : Colors.GreyText,
                            borderBottomWidth: isTags ? 3 : 1,
                        }]}>
                        <Image style={{
                            width: 20, height: 20, marginRight: 5,
                            tintColor: isTags ? Colors.white : Colors.GreyText
                        }} source={Images.Profile2user} />
                        <Text style={{
                            fontSize: 18, fontWeight: '600',
                            color: isTags ? Colors.white : Colors.GreyText
                        }}>
                            {'Tags'}
                        </Text>
                    </TouchableOpacity>
                </View>
                {
                    isFeeds &&
                    <FlatList
                        style={{
                            width: '90%',
                            alignSelf: 'center',
                            marginTop: 10,
                            marginBottom: 80
                        }}
                        numColumns={3}
                        data={FeedsData}
                        renderItem={_FeedsRenderItem}
                        keyExtractor={item => item.data}
                    />
                }
                {isTapes &&
                    <FlatList
                        style={{
                            width: '90%',
                            alignSelf: 'center',
                            marginTop: 10,
                            marginBottom: 80
                        }}
                        numColumns={3}
                        data={FeedsData}
                        renderItem={_TapessRenderItem}
                        keyExtractor={item => item.data}
                    />
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    profileImageConatiner: {
        width: 90,
        height: 90,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: Colors.GreyText,
        justifyContent: 'center',
        alignItems: 'center'
    },
    editButton: {
        position: "absolute",
        width: 25,
        height: 25,
        bottom: 0,
        right: 0
    },
    userDataContainer: {
        width: 95,
        height: 60,
        borderRightWidth: 0.5,
        borderRightColor: Colors.GreyText,
        justifyContent: "center",
        alignItems: "center",
    },
    userDataTextWhite: {
        fontSize: 22,
        color: Colors.white,
        fontWeight: '600',
    },
    userDataTextGrey: {
        fontSize: 16,
        color: Colors.GreyText,
        fontWeight: '400'
    },
    userDataMainContainer: {
        width: "90%",
        alignSelf: 'center',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userDescriptionContainer: {
        width: "90%",
        alignSelf: "center",
        padding: 20,
        borderRadius: 20,
        backgroundColor: Colors.SocialButtonColor,
        height: 172,
        marginTop: 20
    },
    editProfileMainContainer: {
        width: '90%',
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20
    },
    editProfileButton: {
        justifyContent: "center",
        alignItems: "center",
        width: "55%",
        height: 40,
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: Colors.GreyText
    },
    messageButton: {
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: Colors.GreyText
    },
    flatListMainContainer: {
        alignItems: "center",
        alignSelf: "center",
        marginTop: 10
    },
    FriendsMainContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        alignSelf: "center",
        backgroundColor: Colors.SocialButtonColor,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        paddingHorizontal: 20
    },
    FriendsListInnerContainer: {
        width: 70,
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    tabbarContainer: {
        width: '90%',
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15
    },
    tabbarstyle: {
        width: "33%",
        alignItems: "center",
        justifyContent: "center",
        height: 52,
        flexDirection: 'row',
    },
})