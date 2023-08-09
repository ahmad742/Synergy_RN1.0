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
} from 'react-native'
import React from 'react'
import Colors from '../Utiles/Colors'
import Images from '../Assets/Images/Index'
const ChatTextInput = (props) => {

    const {
        value,
        onChangeText,
        placeholder
    } = props

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{
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
                }}>
                    <TouchableOpacity style={{
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
                        width: '50%',
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
                                width: '50%',
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
                            alignItems: 'center'
                        }}>
                            <Image style={{ width: 24, height: 24 }}
                                source={Images.microphone} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{
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
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default ChatTextInput

const styles = StyleSheet.create({})