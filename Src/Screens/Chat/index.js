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
    Alert,
    Platform,
    PermissionsAndroid,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../Utiles/Colors'
import Images from '../../Assets/Images/Index'
import ChatHeader from '../../Components/ChatHeader'
import LinearGradient from 'react-native-linear-gradient'
import ChatTextInput from '../../Components/ChatTextInput'
import EmojiSelector, { Categories } from 'react-native-emoji-selector'
import { sendMessage, chatDetails } from '../../api/methods/auth'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Chat = ({ navigation, route }) => {


    const { friendDetails, convoDetails } = route?.params
    const [message, setMessage] = useState('')
    const [allMsgs, setAllMsgs] = useState([])
    const [results, setResults] = useState([]);
    const [img, setimg] = useState('')
    const [selectedImage, setSelectedImage] = useState('')
    const [post, setPost] = useState()

    useEffect(() => {
        setTimeout(() => {
            chatList()
        }, 500);
    }, [])

    useEffect(() => {
        requestCameraPermission()
        userInfo()
    }, [])
    const userInfo = () => {
        AsyncStorage.getItem('user').then((val) => {
            console.log("value -->>>", val);
        })
    }

    const libraryOptions = {
        opacity: 0.3,
        mediaType: 'mixed',
        quality: 0.1,
    }
    const CameraOptions = {
        opacity: 0.3,
        mediaType: 'mixed',
        quality: 1,
    }
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "App Camera Permission",
                    message: "App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission given");
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const callback = async response => {
        console.log('my response=====>', response)
        if (response.didCancel) {
            console.log("User Cancelled Image Picker")
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else {
            const source = {
                uri: response.assets[0].uri,
                name: response.assets[0].fileName,
                type: response.assets[0].type,
            };
            setimg(source)
        }
    }

    const showCamera = () => {
        launchCamera(CameraOptions, callback);

    }
    const showLibrary = () => {
        // console.log('im here')
        launchImageLibrary(libraryOptions, callback)

    }

    const sendMsg = async () => {
        try {
            let formData = new FormData()
            formData.append('friend_id', friendDetails?.id || convoDetails?.friend?.id)
            formData.append('message_type', 'text')
            formData.append('message', message)
            formData.append('reaction', "smile")
            formData.append('parent_id', '1')
            console.log("formData==>>", formData)
            const response = await sendMessage(formData)
            if (response?.data?.code == 200) {
                setMessage('')
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }
    const chatList = async () => {
        try {
            const response = await chatDetails(convoDetails?.id);
            if (response.data?.code == 200) {
                console.log("chatList response -->>>", response.data?.data?.messages);
                setAllMsgs(response.data?.data)
            }
        } catch (error) {
            console.log('Chat-List-Error:', error);
        }
    }

    _messageRenderItem = ({ item }) => {
        let time = ''
        time = item?.parent_message?.date_time
        const splitTime = time.split(' ')
        return (
            <View style={{
                width: "90%",
                alignSelf: 'center'
            }}>
                {
                    item?.friend?.id != item?.sender?.id ?
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
                                    <Image style={styles.imageProfileStyle} source={{ uri: item?.receiver?.image }} />
                                </View>
                                <View style={styles.messageInnerContainer}>
                                    <Text style={styles.msgTextStyle}>{item?.message}</Text>
                                </View>
                            </View>
                            <View style={styles.timeContainer}>
                                <Text style={styles.timeText}>{splitTime[1]}</Text>
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
                                    }} source={{ uri: item?.receiver?.image }} />
                                </View>
                            </View>
                            <View style={styles.userTimeContainer}>

                                <Text style={styles.timeText}>{item?.parent_message?.date_time}</Text>
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
                Username={friendDetails?.username || convoDetails?.friend?.username}
                useProfile={{ uri: friendDetails?.image }}
                status='online'
                onBackPress={() => navigation.goBack()}
                onVideoPress={() => navigation.navigate('VideoCall')}
                onCameraPress={() => showCamera()}
            />
            <FlatList
                data={allMsgs?.messages}
                renderItem={_messageRenderItem}
                keyExtractor={(item, index) => `${item.id}, ${index}`}
            />
            <ChatTextInput
                placeholder={'Message...'}
                onChangeText={(text) => setMessage(text)}
                value={message}
                messagelength={message.length > 0}
                onSendMsgPress={() => sendMsg()}
                onImagePickerPress={() => showLibrary()}
                onCameraPress={() => showCamera()}
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