import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginOptions from '../../Screens/LoginOptions';
import Login from '../../Screens/Login';
import SignUp from '../../Screens/SignUp';
import OtpVerification from '../../Screens/OtpVerification';
import CreatePassword from '../../Screens/CreatePassword';
import CreateUsername from '../../Screens/CreateUsername';
import ConfirmEmail from '../../Screens/ConfirmEmail';

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="LoginOptions" component={LoginOptions} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="OtpVerification" component={OtpVerification} />
            <Stack.Screen name="CreatePassword" component={CreatePassword} />
            <Stack.Screen name="CreateUsername" component={CreateUsername} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
        </Stack.Navigator>
    );
}

export default AuthStack;