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
import React, { useEffect, useState } from 'react'
import AllChatsHeader from '../../Components/AllChatsHeader'
import Images from '../../Assets/Images/Index'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../Utiles/Colors'
import { conversationList, getAllFreinds } from '../../api/methods/auth'
import Loader from '../../Components/Loader'
import { useIsFocused } from '@react-navigation/native'

const AllMessages = ({ navigation }) => {

    const isFocused = useIsFocused()
    const [allFriends, setAllFriends] = useState([])
    const [loading, setLoading] = useState(false)
    const [allMsgs, setAllMsgs] = useState([])


    useEffect(() => {
        getFreindsChat()
        allConversations()
    }, [isFocused])

    const getFreindsChat = async () => {
        setLoading(true)
        try {
            const response = await getAllFreinds();
            if (response.data.status == 'error') {
                alert(response.data.message)
            }
            setAllFriends(response.data?.data)
        } catch (error) {
            if (error.response) {
                console.log('Error:', error.response.data);
            }
        }
        finally {
            setLoading(false)
        }
    }
    const allConversations = async () => {
        setLoading(true)
        try {
            const response = await conversationList();
            if (response.data.status == 'error') {
                alert(response.data.message)
            }
            setAllMsgs(response.data?.data)
        } catch (error) {
            console.log('allConversations-Error:', error);
        }
        finally {
            setLoading(false)
        }
    }



    const _userChatsRenderItem = ({ item }) => {
        let time = ''
        time = item?.date_time
        const splitTime = time.split(' ')
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Chat', {
                    convoDetails: item
                })}
                style={styles.messageCardContainer}>
                <View style={styles.userImageContainer}>
                    <Image style={{ width: 44, height: 44, borderRadius: 100 }}
                        source={{ uri: item?.friend?.image }}
                    />
                    <View style={styles.onlineInfoStyle}></View>
                </View>
                <View style={{
                    width: '55%',
                    justifyContent: "center",
                    marginLeft: 10,
                }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.white }}>
                        {item?.friend?.username}</Text>
                    {
                        item.callendTime ?
                            <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.GreyText }} numberOfLines={1}>
                                {item.callendTime}</Text>
                            :
                            <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.GreyText }} numberOfLines={1}>
                                {item?.last_message}</Text>
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
                                {splitTime[1]}
                            </Text>
                            {
                                item?.unread_messages > 0 &&
                                <LinearGradient colors={[Colors.AppButtonColor1, Colors.AppButtonColor2]}
                                    style={styles.counterContainer}>
                                    <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.white }}>{item?.unread_messages}</Text>
                                </LinearGradient>
                            }
                        </View>
                }
            </TouchableOpacity>
        )
    }

    const _onlineUseRenderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Chat', {
                friendDetails: item
            })}>
                <LinearGradient colors={['#191D2B', '#090D14']}
                    style={styles.usersOnlineInfoContainer}
                >
                    <View style={styles.userImageContainer}>
                        <Image style={{ width: 44, height: 44, borderRadius: 100 }}
                            source={{ uri: item?.image }}
                        />
                        <View style={styles.onlineInfoStyle}></View>
                    </View>
                    <Text style={styles.usersNameTextStyle}>{item?.username}</Text>

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
                    data={allFriends}
                    renderItem={_onlineUseRenderItem}
                    keyExtractor={(item, index) => `${item.id}, ${index}`}
                />
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={allMsgs}
                    renderItem={_userChatsRenderItem}
                    keyExtractor={(item, index) => `${item.id}, ${index}`}
                />
            </View>
            <Loader loading={loading} isShowIndicator={true} />
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