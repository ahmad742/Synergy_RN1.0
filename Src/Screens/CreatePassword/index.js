import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../Utiles/Colors'
import Header from '../../Components/Header'
import Images from '../../Assets/Images/Index'
import AppTextInput from '../../Components/AppTextInput'
import AppButton from '../../Components/AppButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { signUpAPI } from '../../api/methods/auth'
const CreatePassword = ({ navigation, route }) => {
    let udata = {}
    let userdata = route.params.userdata
    const [finalData, setFinalData] = useState(userdata)
    const [password, setPassword] = useState('')
    const onContinuePress = async () => {
        if (password == '') {
            alert('Enter Password')
        } else {
            if (finalData.email == undefined) {
                udata = {
                    "username": finalData.username,
                    "phone_code": finalData.code,
                    "phone": finalData.phone,
                    "password": password
                }
            } else {
                udata = {

                    "username": finalData.username,
                    "email": finalData.email,
                    "password": password
                }
            }
            try {
                const response = await signUpAPI(udata)
                console.log('SigupAPI Response', response.data)
                if (response.data.status == 'success') {
                    navigation.replace('Login')
                } else {
                    alert(response.data.message)
                }
            } catch (error) {
                console.log('SigupAPI Error', error)
            }
        }
    }


    return (
        <LinearGradient colors={['#101321', '#0a0e16']} style={styles.mainContainer}>
            <SafeAreaView style={{ flex: 1 }}>
                <Header
                    Heading={'Sign Up'}
                    onBackPress={() => navigation.goBack()}
                    RightText={'Skip'}
                    Lefticon={Images.InfoIcons}
                />
                <View style={{
                    width: "90%",
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 50
                }}>
                    <Text style={{ fontSize: 30, fontWeight: '700', color: Colors.white }}>
                        {'Create Password'}
                    </Text>
                </View>
                <View style={{
                    width: "90%",
                    alignSelf: "center",
                    marginTop: 20,
                    alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.GreyText }}>
                        {'Think of a password for your account '}
                    </Text>
                </View>
                <KeyboardAwareScrollView>
                    <AppTextInput
                        placeholder='Enter Password'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        rightIcon={Images.Hide}
                        LeftIcon={Images.Password}
                    />
                    <View style={{
                        width: "90%",
                        alignSelf: "center",
                        marginTop: 20
                    }}>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.white }}>
                            {"Your password must have:"}
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.GreyText, marginTop: 10 }}>
                            {'8-20 characters   '}
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.GreyText, marginTop: 5 }}>
                            {'Letters, numbers and special characters   '}
                        </Text>
                    </View>

                    {
                        password !== '' ?
                            <AppButton
                                ButtonText={'Continue'}
                                ButtonStyle={styles.ButtonStyle}
                                onPress={() => onContinuePress()}
                            />
                            :
                            <TouchableOpacity
                                onPress={() => onContinuePress()}
                                style={{
                                    width: '90%',
                                    alignSelf: 'center',
                                    borderRadius: 50,
                                    height: 52,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: 30,
                                    backgroundColor: Colors.SocialButtonColor
                                }}>
                                <Text style={styles.buttonText}>
                                    {'Continue'}
                                </Text>
                            </TouchableOpacity>
                    }
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </LinearGradient >
    )
}

export default CreatePassword

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.Background,
        flex: 1,
    },
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: {
        marginTop: 20,
        width: '90%',
        alignSelf: "center",
    },
    cell: {
        width: 50,
        height: 55,
        lineHeight: 50,
        fontSize: 24,
        color: Colors.white,
        backgroundColor: Colors.SocialButtonColor,
        textAlign: "center",
    },
    ButtonStyle: {
        width: '100%',
        borderRadius: 50,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    buttonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 15
    },

})