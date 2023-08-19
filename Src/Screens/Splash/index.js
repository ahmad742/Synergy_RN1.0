
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Assets/Images/Index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userSignIn } from '../../ReduxToolKit/Slices/authSlice';
import { useDispatch } from 'react-redux';

const Splash = ({ navigation }) => {
    const dispatch = useDispatch()
    setTimeout(() => {
        AsyncStorage.getItem('token').then((val) => {
            if (val == undefined) {
                navigation.navigate('AuthStack')
            } else {
                dispatch(userSignIn(val))
                navigation.navigate('HomeStack')
            }
        })
    }, 2000);

    return (
        <LinearGradient colors={['#101321', '#0a0e16']} style={styles.mainContainer}>
            <Image
                style={{ width: "100%", height: "50%" }}
                source={Images.SplashLogo} />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#101321',
        justifyContent: "center",
        alignItems: 'center',

    },
});

export default Splash;
