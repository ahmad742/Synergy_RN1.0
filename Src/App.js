import * as React from 'react';
import { View, Text, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainRoute from './Navigations/MainRoute';
import { store } from './ReduxToolKit/store/store'
import { Provider } from 'react-redux';
import * as ZIM from 'zego-zim-react-native';
import * as ZPNs from 'zego-zpns-react-native';
import ZegoUIKitPrebuiltCallService, {
    ZegoCallInvitationDialog,
    ZegoUIKitPrebuiltCallWaitingScreen,
    ZegoUIKitPrebuiltCallInCallScreen,
    ZegoSendCallInvitationButton,
    ZegoMenuBarButtonName,
    ZegoUIKitPrebuiltCallFloatingMinimizedView,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';


LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
LogBox.ignoreAllLogs();

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs([
    "[VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.",
]);
LogBox.ignoreLogs([
    '[Warning: Each child in a list should have a unique "key" prop',
]);



ZegoUIKitPrebuiltCallService.init(
    1917227021, // You can get it from ZEGOCLOUD's console
    '7bcdbc4c8cc6f9743771ff997481dd214d9716a6aa4aa1a359e6bd3980a0f0a7', // You can get it from ZEGOCLOUD's console
    '9', // It can be any valid characters, but we recommend using a phone number.
    'Ahmad',
    [ZIM, ZPNs],
    {
        ringtoneConfig: {
            incomingCallFileName: 'zego_incoming.mp3',
            outgoingCallFileName: 'zego_outgoing.mp3',
        },
        notifyWhenAppRunningInBackgroundOrQuit: true,
        isIOSSandboxEnvironment: true,
        androidNotificationConfig: {
            channelID: "ZegoUIKit",
            channelName: "ZegoUIKit",
        },
    });

export default App = () => {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <ZegoCallInvitationDialog />
                <MainRoute />
            </NavigationContainer>
        </Provider>
    );
}
