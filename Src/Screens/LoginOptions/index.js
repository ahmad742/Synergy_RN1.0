import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Assets/Images/Index';
import Colors from '../../Utiles/Colors';
import AppButton from '../../Components/AppButton';

const LoginOptions = ({ navigation }) => {
    return (
        <LinearGradient colors={['#101321', '#0a0e16']}
            style={styles.mainContainer}>
            <SafeAreaView>
                <View style={{
                    width: '90%',
                    alignSelf: "center",
                }}>
                    <Image
                        style={{ width: "90%", height: 100 }}
                        source={require('../../Assets/Images/appIcon.png')} />
                </View>
                <View style={styles.headingContainer}>
                    <Text style={styles.mainHeading}>
                        {'Surf with \nFriends & Business Relations.'}
                    </Text>
                </View>
                <View style={styles.headingContainer}>
                    <Text style={styles.subHeading}>
                        {'Create a profile, follow other accounts, make your own videos and more'}
                    </Text>
                </View>
                <TouchableOpacity style={styles.socialButtonContainer}>
                    <Image style={{ width: 20, height: 20, }} source={Images.FacebookLogo} />
                    <Text style={styles.socialButtonText}>{'Conitinue with Facebook'}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.socialButtonContainer}>
                    <Image style={{ width: 20, height: 20, }} source={Images.GoogleLogo} />
                    <Text style={styles.socialButtonText}>{'Conitinue with Google'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButtonContainer}>
                    <Image style={{ width: 20, height: 20, tintColor: Colors.white }} source={Images.AppleLogo} />
                    <Text style={styles.socialButtonText}>{'Conitinue with Apple'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    style={styles.ButtonStyle}>
                    <LinearGradient colors={[Colors.AppButtonColor1, Colors.AppButtonColor2]}
                        style={[styles.ButtonStyle, {
                            flexDirection: "row",
                            alignItems: 'center'
                        }]}
                    >
                        <Image
                            style={{ width: 20, height: 20, tintColor: Colors.white }}
                            source={Images.User} />
                        <Text style={styles.buttonText}>
                            {'Use Phone or Email'}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={[styles.headingContainer, { marginTop: 30 }]}>
                    <Text style={styles.noteText}>
                        {'By continuing, you agree to our Terms of Service and acknowledge that you have read our Privacy Policy to learn how we collect, use and share your data.'}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={styles.bottomLoginContainer}>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: Colors.white }}>
                        {'Already have an account? '}
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: Colors.AppButtonColor1 }}>
                        {'Log in'}
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#101321',
    },
    mainHeading: {
        fontSize: 40,
        fontWeight: '600',
        lineHeight: 48,
        color: Colors.white
    },
    subHeading: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22.4,
        color: Colors.GreyText
    },
    noteText: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 19.6,
        color: Colors.GreyText
    },
    headingContainer: {
        width: "90%",
        alignSelf: 'center',
        marginTop: 20
    },
    socialButtonContainer: {
        width: "90%",
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: Colors.SocialButtonColor,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 60,
        height: 52,
        borderWidth: 0.4,
        borderColor: Colors.GreyText,
        marginTop: 20
    },
    socialButtonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 20,
    },
    ButtonStyle: {
        width: '95%',
        alignSelf: 'center',
        borderRadius: 10,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15
    },
    buttonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 15
    },
    bottomLoginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        // paddingHorizontal: 40,
        justifyContent: "center"

    }
});
export default LoginOptions

