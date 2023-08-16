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
import React, { useEffect } from 'react'
import AllChatsHeader from '../../Components/AllChatsHeader'
import Images from '../../Assets/Images/Index'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../Utiles/Colors'
import { getAllFreinds } from '../../api/methods/auth'

const AllMessages = ({ navigation }) => {
    const onlineUserData = [
        {
            id: 1,
            name: 'Alexander',
            image: Images.ProfileImage
        },
        {
            id: 2,
            name: 'Alexander',
            image: Images.ProfileImage
        },
        {
            id: 3,
            name: 'Alexander',
            image: Images.ProfileImage
        },
        {
            id: 4,
            name: 'Alexander',
            image: Images.ProfileImage
        },
        {
            id: 5,
            name: 'Alexander',
            image: Images.ProfileImage
        },
    ]

    useEffect(() => {
        getFreindsChat()
    }, [])

    const userChats = [
        {
            id: 1,
            image: Images.ProfileImage,
            name: 'Wade Warren',
            latestMessage: 'Hi, how long are we goin ...',
            callend: 'End Call',
            callendTime: '6m : 23sec'
        },
        {
            id: 2,
            image: Images.ProfileImage,
            name: 'Brooklyn Simmons',
            latestMessage: 'Hi, how long are we goin ...',
            time: '11:03 am',
            messageCounter: '1'
        },
        {
            id: 3,
            image: Images.ProfileImage,
            name: 'Frank',
            latestMessage: 'Hi, how long are we goin ...',
            callend: 'End Call',
            callendTime: '2m : 2sec'
        },
        {
            id: 4,
            image: Images.ProfileImage,
            name: 'Robert Fox',
            latestMessage: 'Hi, how long are we goin ...',
            time: '11:03 am',
            messageCounter: '6'
        },
        {
            id: 5,
            image: Images.ProfileImage,
            name: 'Jenny Wilson',
            latestMessage: 'Hi, how long are we goin ...',
            time: '11:03 am',
        },
        {
            id: 6,
            image: Images.ProfileImage,
            name: 'Wade Warren',
            latestMessage: 'Hi, how long are we goin ...',
            time: '11:03 am',
            messageCounter: '9'
        },
        {
            id: 7,
            image: Images.ProfileImage,
            name: 'Frank',
            latestMessage: 'Hi, how long are we goin ...',
            callend: 'End Call',
            callendTime: '23sec'
        },
    ]


    const getFreindsChat = async () => {
        try {
            const response = await getAllFreinds();
            if (response.data.status == 'error') {
                alert(response.data.message)
            }
            console.log('Response', JSON.stringify(response.data));
        } catch (error) {
            if (error.response) {
                console.log('Error:', error.response.data);
            }
        }
    }


    const _userChatsRenderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Chat')}
                style={styles.messageCardContainer}>
                <View style={styles.userImageContainer}>
                    <Image style={{ width: 44, height: 44, borderRadius: 100 }}
                        source={item.image}
                    />
                    <View style={styles.onlineInfoStyle}></View>
                </View>
                <View style={{
                    width: '55%',
                    justifyContent: "center",
                    marginLeft: 10,
                }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.white }}>
                        {item.name}</Text>
                    {
                        item.callendTime ?
                            <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.GreyText }} numberOfLines={1}>
                                {item.callendTime}</Text>
                            :
                            <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.GreyText }} numberOfLines={1}>
                                {item.latestMessage}</Text>
                    }
                </View>
                {
                    item.callend ?
                        <View style={styles.callEndContainer}>
                            <Image source={Images.Calldecline}
                                style={{ width: 20, height: 20, marginRight: 10 }} />
                            <Text style={{ fontSize: 16, fontWeight: '600', color: '#E34949' }}>{item.callend}</Text>
                        </View>
                        :
                        <View style={styles.messagetimeContainer}>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.GreyText }}>
                                {item.time}
                            </Text>
                            {
                                item.messageCounter &&
                                <LinearGradient colors={[Colors.AppButtonColor1, Colors.AppButtonColor2]}
                                    style={styles.counterContainer}>
                                    <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.white }}>{item.messageCounter}</Text>
                                </LinearGradient>
                            }
                        </View>
                }


            </TouchableOpacity>
        )
    }

    const _onlineUseRenderItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <LinearGradient colors={['#191D2B', '#090D14']}
                    style={styles.usersOnlineInfoContainer}
                >
                    <View style={styles.userImageContainer}>
                        <Image style={{ width: 44, height: 44, borderRadius: 100 }}
                            source={item.image}
                        />
                        <View style={styles.onlineInfoStyle}></View>
                    </View>
                    <Text style={styles.usersNameTextStyle}>{item.name}</Text>

                </LinearGradient>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{
            backgroundColor: Colors.Background,
            flex: 1
        }}>
            <AllChatsHeader
                Username='Vitaliy Dorozho'
                useProfile={Images.Add}
                status='online'
                onBackPress={() => navigation.goBack()}
                placeholder={'Search People'}
            />
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    style={{
                        width: '95%',
                        alignSelf: 'center',
                        marginTop: 20,
                    }}
                    horizontal
                    data={onlineUserData}
                    renderItem={_onlineUseRenderItem}
                    keyExtractor={(item, index) => `${item.id}, ${index}`}
                />
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={userChats}
                    renderItem={_userChatsRenderItem}
                    keyExtractor={(item, index) => `${item.id}, ${index}`}
                />
            </View>
        </SafeAreaView>
    )
}

export default AllMessages

const styles = StyleSheet.create({
    usersOnlineInfoContainer: {
        width: 100,
        height: 103,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    userImageContainer: {
        width: 52,
        height: 52,
        borderRadius: 100,
        backgroundColor: '#101421',
        justifyContent: "center",
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.GreyText
    },
    onlineInfoStyle: {
        width: 8,
        height: 8,
        backgroundColor: "#2AD983",
        borderRadius: 20,
        position: 'absolute',
        top: 7,
        right: 7
    },
    usersNameTextStyle: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600'
    },
    messageCardContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: "center",
        height: 70,
        margin: 5
    },
    callEndContainer: {
        width: '25%',
        justifyContent: "center",
        marginLeft: 10,
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    counterContainer: {
        width: 20,
        height: 20,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 5
    },
    messagetimeContainer: {
        width: '25%',
        justifyContent: "center",
        marginLeft: 10,
        alignItems: 'flex-end',
    }
})