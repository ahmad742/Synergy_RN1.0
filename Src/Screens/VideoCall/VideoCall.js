// App.js
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'

export default function VideoCall(props) {
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={1917227021}
                appSign={'7bcdbc4c8cc6f9743771ff997481dd214d9716a6aa4aa1a359e6bd3980a0f0a7'}
                userID={'9'} // userID can be something like a phone number or the user id on your own user system. 
                userName={'Ahmad'}
                callID={'synergy786'} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { props.navigation.navigate('Chat') },
                    onHangUp: () => { props.navigation.navigate('Chat') },
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

