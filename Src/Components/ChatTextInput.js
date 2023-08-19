import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Text
} from 'react-native'
import React from 'react'
import Colors from '../Utiles/Colors'
import Images from '../Assets/Images/Index'
import EmojiSelector, { Categories } from "react-native-emoji-selector";
const ChatTextInput = (props) => {

    const {
        value,
        onChangeText,
        placeholder,
        messagelength,
        onSendMsgPress,
        onCameraPress
    } = props

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' && 'padding'}
        // style={{ flex: 1 }} 
        >
            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
            <View style={styles.mainContainer}>
                <View style={{
                    width: messagelength ? "85%" : '60%',
                    alignSelf: "center",
                    flexDirection: 'row',
                    backgroundColor: '#181D29',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <TouchableOpacity
                        onPress={onCameraPress}
                        style={{
                            width: 44,
                            height: 44,
                            backgroundColor: '#1E2533',
                            borderRadius: 100,
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                        <Image style={{ width: 30, height: 30 }}
                            source={Images.camera} />
                    </TouchableOpacity>
                    <View style={{
                        width: "85%",
                        alignItems: "center",
                        height: 48,
                        backgroundColor: Colors.ChatTextInputBgColor,
                        flexDirection: 'row',
                        paddingHorizontal: 10,
                        borderRadius: 30
                    }}>
                        <TouchableOpacity style={{
                            width: 44,
                            height: 44,
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                            <Image style={{ width: 24, height: 24 }}
                                source={Images.History} />
                        </TouchableOpacity>
                        <TextInput
                            value={value}
                            onChangeText={onChangeText}
                            placeholder={placeholder}
                            placeholderTextColor={Colors.GreyText}
                            style={{
                                width: messagelength ? "60%" : '50%',
                                alignItems: "center",
                                height: 48,
                                backgroundColor: Colors.ChatTextInputBgColor,
                                color: Colors.white
                            }}
                        />
                        <TouchableOpacity style={{
                            width: 44,
                            height: 44,
                            justifyContent: "center",
                            alignItems: 'center',
                        }}>
                            <Image style={{ width: 24, height: 24 }}
                                source={Images.microphone} />
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    messagelength ?
                        <View style={{
                            width: '10%',
                            alignItems: "center",
                            flexDirection: 'row',
                            borderRadius: 30,
                            height: 44,
                        }}>
                            <TouchableOpacity
                                onPress={onSendMsgPress}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 10,
                                    justifyContent: "center",
                                    alignItems: 'center'
                                }}>
                                <Image style={{ width: 44, height: 44 }}
                                    source={Images.SendMessage} />
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={{
                            width: '40%',
                            alignItems: "center",
                            flexDirection: 'row',
                            borderRadius: 30,
                            justifyContent: 'flex-end'
                        }}>
                            <TouchableOpacity
                                onPress={() => {

                                }}
                                style={{
                                    width: 44,
                                    height: 44,
                                    backgroundColor: '#1E2533',
                                    borderRadius: 100,
                                    justifyContent: "center",
                                    alignItems: 'center'
                                }}>
                                <Image style={{ width: 24, height: 24 }}
                                    source={Images.Emojis} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                width: 44,
                                height: 44,
                                backgroundColor: '#1E2533',
                                borderRadius: 100,
                                justifyContent: "center",
                                alignItems: 'center'
                            }}>
                                <Image style={{ width: 24, height: 24 }}
                                    source={Images.Image} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                width: 44,
                                height: 44,
                                backgroundColor: '#1E2533',
                                borderRadius: 100,
                                justifyContent: "center",
                                alignItems: 'center'
                            }}>
                                <Image style={{ width: 24, height: 24 }}
                                    source={Images.PlusCircle} />
                            </TouchableOpacity>
                        </View>
                }

            </View>
            {/* </TouchableWithoutFeedback> */}
        </KeyboardAvoidingView >
    )
}

export default ChatTextInput

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        alignSelf: "center",
        flexDirection: 'row',
        // justifyContent: "space-between",
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