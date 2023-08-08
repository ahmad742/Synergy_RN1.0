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

const ConfirmEmail = ({ navigation }) => {

    const [password, setPassword] = useState('')

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
                        {'Confirm your email'}
                    </Text>
                </View>
                <View style={{
                    width: "90%",
                    alignSelf: "center",
                    marginTop: 10,
                    alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.GreyText, textAlign: 'center' }}>
                        {'Please enter the code we sent to julia.andrews@gmail.com  '}
                    </Text>
                </View>
                <KeyboardAwareScrollView>
                    <AppTextInput
                        placeholder='Enter the code'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        LeftIcon={Images.Key}
                    />
                    <View style={{
                        width: "90%",
                        alignSelf: "center",
                        marginTop: 20
                    }}>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.GreyText, marginTop: 10 }}>
                            {'Didn’t receive an email or something went wrong.'}
                        </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.white, lineHeight:24 }}>
                                {"Resend code"}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {
                        password !== '' ?
                            <AppButton
                                ButtonText={'Continue'}
                                ButtonStyle={styles.ButtonStyle}
                            // onPress={() => navigation.navigate('ConfirmEmail')}
                            />
                            :
                            <TouchableOpacity
                                onPress={() => alert('Please enter a password')}
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

export default ConfirmEmail

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