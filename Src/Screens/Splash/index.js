
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
const Splash = ({ navigation }) => {

    setTimeout(() => {
        navigation.navigate('OnBoarding')
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
