import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Utiles/Colors'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../../Components/Header'
import AppTextInput from '../../Components/AppTextInput'
import Images from '../../Assets/Images/Index'
import AppButton from '../../Components/AppButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { signIn } from '../../api/methods/auth'
import { useDispatch } from 'react-redux'
import { userSignIn } from '../../ReduxToolKit/Slices/authSlice'


const Login = ({ navigation }) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [passwword, setPassword] = useState('')


    const onSignInPress = async () => {
        if (email == '' && passwword == '') {
            alert('Email and Password is required')
        } else {
            console.log(email, passwword)
            try {
                const response = await signIn({
                    email: email,
                    password: passwword
                });
                console.log('Res',response)
                if (response?.data?.status == 'error') {
                    alert(response?.data?.message)
                } else {
                    console.log('Login Response', response?.data?.token)
                    try {
                        await AsyncStorage.setItem('token', response.data.token)
                        dispatch(userSignIn(response?.data?.token))
                        navigation.replace('HomeStack')
                    } catch (error) {
                        alert('AsyncStorage Error')
                    }

                }
            } catch (error) {
                    console.log('Error:', error);
                
            }

        }
    }

    return (
        <LinearGradient colors={['#101321', '#0a0e16']} style={styles.mainContainer}>
            <SafeAreaView>
                <Header
                    Heading={'Log In'}
                    onBackPress={() => navigation.goBack()}
                />
                <View style={styles.headingContainer}>
                    <Text style={{
                        fontSize: 28,
                        fontWeight: '700',
                        color: Colors.white
                    }}>
                        {`Login To Your Account`}
                    </Text>
                </View>
                <AppTextInput
                    placeholder='Email'
                    onChangeText={(val) => setEmail(val)}
                    value={email}
                    LeftIcon={Images.Email}
                />
                <AppTextInput
                    placeholder='Password'
                    onChangeText={(val) => setPassword(val)}
                    value={passwword}
                    LeftIcon={Images.Password}
                    rightIcon={Images.View}
                />
                <View style={styles.optionsContainer}>
                    <View style={styles.remeberContainer}>
                        <TouchableOpacity style={styles.checkBoxContainer}>

                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: '400', color: Colors.white }}>
                            {'Remember Me'}
                        </Text>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.AppButtonColor1 }}>
                        {'Forgot Password ?'}
                    </Text>
                </View>
                <AppButton
                    ButtonText={'Sign In'}
                    ButtonStyle={styles.ButtonStyle}
                    onPress={() => onSignInPress()}
                />
                <View style={styles.continueContainer}>
                    <View style={styles.borderline}></View>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: Colors.white }}>
                        {'or continue with'}
                    </Text>
                    <View style={styles.borderline}></View>
                </View>
                <View style={styles.socialLoginContainer}>
                    <TouchableOpacity style={styles.socialLogin}>
                        <Image style={{ width: 25, height: 25 }} source={Images.FacebookLogo} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialLogin}>
                        <Image style={{ width: 25, height: 25 }} source={Images.GoogleLogo} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialLogin}>
                        <Image style={{ width: 25, height: 25 }} source={Images.AppleLogo} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    style={styles.bottomLoginContainer}>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: Colors.white }}>
                        {"Don't have an account? "}
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: Colors.AppButtonColor1 }}>
                        {'Sign Up'}
                    </Text>
                </TouchableOpacity>

            </SafeAreaView>
        </LinearGradient>
    )
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.Background,
        flex: 1,
    },
    ButtonStyle: {
        width: '100%',
        borderRadius: 50,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "90%",
        alignSelf: 'center',
        marginTop: 20
    },
    remeberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%'
    },
    checkBoxContainer: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderColor: Colors.AppButtonColor1,
        borderWidth: 2
    },
    headingContainer: {
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    bottomLoginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        marginTop: 30,
        justifyContent: "center"

    },
    borderline: {
        width: "30%",
        borderBottomWidth: 1,
        borderColor: Colors.GreyText,
    },
    continueContainer: {
        flexDirection: 'row',
        width: "90%",
        alignSelf: "center",
        justifyContent: "space-between",
        marginTop: 90,
        alignItems: "center"
    },
    socialLogin: {
        width: 100,
        height: 100,
        backgroundColor: Colors.SocialButtonColor,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: "center"
    },
    socialLoginContainer: {
        width: "90%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30
    }
})