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
    TextInput,
} from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Utiles/Colors'
import Images from '../../Assets/Images/Index'
import ChatHeader from '../../Components/ChatHeader'
import LinearGradient from 'react-native-linear-gradient'
import ChatTextInput from '../../Components/ChatTextInput'
import EmojiSelector, { Categories } from 'react-native-emoji-selector'

const Chat = ({ navigation }) => {

    const [message, setMessage] = useState('')

    const messageData = [
        {
            id: 1,
            userMessage: 'hellooo',
            time: '2:00 AM'
        },
        {
            id: 2,
            senderMessage: 'Hi',
            time: '2:10 AM'
        },
        {
            id: 3,
            userMessage: 'How are you?',
            time: '2:12 AM'
        },
        {
            id: 4,
            senderMessage: 'I am Good',
            time: '2:15 AM'
        },
        {
            id: 5,
            userMessage: 'What are you doing',
            time: '2:17 AM'
        },
    ]

    _messageRenderItem = ({ item }) => {
        return (
            <View style={{
                width: "90%",
                alignSelf: 'center'
            }}>
                {
                    item.senderMessage ?
                        <TouchableOpacity
                            delayLongPress={5} onLongPress={() => { console.log("pressed") }}
                            style={{
                                width: "80%",
                                height: 90,
                                justifyContent: 'center',

                            }}>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 10,
                                alignItems: 'center'
                            }}>
                                <View style={styles.imageProfileContainer}>
                                    <Image style={styles.imageProfileStyle} source={Images.ProfileImage} />
                                </View>
                                <View style={styles.messageInnerContainer}>
                                    <Text style={styles.msgTextStyle}>{item.senderMessage}</Text>
                                </View>
                            </View>
                            <View style={styles.timeContainer}>

                                <Text style={styles.timeText}>{item.time}</Text>
                            </View>
                        </TouchableOpacity>
                        :
                        <View style={{
                            width: "80%",
                            height: 90,
                            justifyContent: 'center',
                            alignSelf: 'flex-end'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 10,
                                alignItems: 'center'
                            }}>
                                <LinearGradient colors={['#77C5FF', '#3352E8']}
                                    style={styles.userMessageStyle}
                                >
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '600',
                                        color: Colors.white
                                    }}>{item.userMessage}</Text>
                                </LinearGradient>
                                <View style={styles.imageProfileContainer}>
                                    <Image style={{
                                        width: 42,
                                        height: 42,
                                        borderRadius: 100,
                                    }} source={Images.ProfileImage} />
                                </View>
                            </View>
                            <View style={styles.userTimeContainer}>

                                <Text style={styles.timeText}>{item.time}</Text>
                            </View>
                        </View>
                }


            </View>
        )
    }

    return (
        <SafeAreaView style={{
            backgroundColor: Colors.Background,
            flex: 1
        }}>
            <ChatHeader
                Username='Vitaliy Dorozho'
                useProfile={Images.Add}
                status='online'
                onBackPress={() => navigation.goBack()}
                onVideoPress={() => navigation.navigate('VideoCall')}
            />
            <FlatList
                data={messageData}
                renderItem={_messageRenderItem}
                keyExtractor={(item, index) => `${item.id}, ${index}`}
            />
            <ChatTextInput
                placeholder={'Message...'}
                onChangeText={(text) => setMessage(text)}
                value={message}
                messagelength={message.length > 0}
            />


        </SafeAreaView>
    )
}

export default Chat

const styles = StyleSheet.create({
    messageInnerContainer: {
        width: "80%",
        height: 62,
        backgroundColor: '#1E2533',
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginLeft: 10
    },
    timeContainer: {
        backgroundColor: '#1D2233',
        width: 75,
        height: 24,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        bottom: 0,
        right: 20
    },
    imageProfileStyle: {
        width: 42,
        height: 42,
        borderRadius: 100,
    },
    userMessageStyle: {
        width: "80%",
        height: 62,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginRight: 10
    },
    msgTextStyle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.white
    },
    userTimeContainer: {
        backgroundColor: '#1D2233',
        width: 75,
        height: 24,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        bottom: 0,
        right: 80
    },
    imageProfileContainer: {
        width: 48,
        height: 48,
        backgroundColor: '#1E2533',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    timeText: {
        fontSize: 12,
        fontWeight: '500',
        color: Colors.white
    },
    writeMessageStyle: {
        width: "100%",
        alignSelf: "center",
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: '#181D29',
        height: 102,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopColor: Colors.GreyText,
        borderWidth: 0.4,
        paddingHorizontal: 10
    }
})