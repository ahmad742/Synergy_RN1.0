import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Utiles/Colors'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../../Components/Header'
import AppTextInput from '../../Components/AppTextInput'
import Images from '../../Assets/Images/Index'
import AppButton from '../../Components/AppButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SignUp = ({ navigation }) => {
    const [isPhone, setIsPhone] = useState(true)
    const [isEmail, setIsEmail] = useState(false)
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    return (
        <LinearGradient colors={['#101321', '#0a0e16']} style={styles.mainContainer}>
            <SafeAreaView style={{ flex: 1 }}>
                <Header
                    Heading={'Sign Up'}
                    onBackPress={() => navigation.goBack()}
                    Backicon={Images.BackIcon}
                />
                <View style={styles.tabbarContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            setIsPhone(true),
                                setIsEmail(false)
                        }}
                        style={[styles.tabbarstyle, {
                            borderBottomColor: isPhone ? Colors.AppButtonColor1 : Colors.GreyText,
                            borderBottomWidth: isPhone ? 3 : 1,

                        }]}>
                        <Text style={{ fontSize: 16, fontWeight: '400', color: Colors.white }}>
                            {'Phone'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setIsPhone(false),
                                setIsEmail(true)
                        }}
                        style={[styles.tabbarstyle, {
                            borderBottomColor: isEmail ? Colors.AppButtonColor1 : Colors.GreyText,
                            borderBottomWidth: isEmail ? 3 : 1,
                        }]}>
                        <Text style={{ fontSize: 16, fontWeight: '400', color: Colors.white }}>
                            {'Email'}
                        </Text>
                    </TouchableOpacity>
                </View>
                {
                    isPhone &&
                    <KeyboardAwareScrollView >
                        <View style={styles.PhoneInputContainer}>
                            <TouchableOpacity style={styles.countryPickerContainer}>
                                <Text style={{ fontSize: 16, fontWeight: '400', color: Colors.white }}>
                                    {' SG +65'}
                                </Text>
                                <Image
                                    style={{ width: 15, height: 15, transform: [{ rotate: '270deg' }], tintColor: Colors.white }}
                                    source={Images.BackIcon} />
                            </TouchableOpacity>
                            <TextInput
                                placeholder='Phone number'
                                placeholderTextColor={Colors.GreyText}
                                onChangeText={(text) => setPhone(text)}
                                value={phone}
                                style={styles.textInputContainer}
                                keyboardType='number-pad'
                            />
                        </View>
                        {
                            phone !== '' &&
                            <View style={{ width: "90%", alignSelf: 'center', marginTop: 30 }}>
                                <Text style={{ fontSize: 16, fontWeight: '600', color: Colors.GreyText, lineHeight: 22.4 }}>
                                    {'Your number will be used to improve your synergy experience, including connecting you with people you may know, personalizing your ads experience and more. If you sign up with SMS, SMS fees may apply. Learn More'}
                                </Text>
                            </View>
                        }
                        {
                            phone !== '' ?
                                <AppButton
                                    ButtonText={'Send Code'}
                                    ButtonStyle={styles.ButtonStyle}
                                    onPress={() => navigation.replace('OtpVerification')}
                                />
                                :
                                <TouchableOpacity
                                    onPress={() => alert('Please enter a phone number')}
                                    style={{
                                        width: '90%',
                                        alignSelf: 'center',
                                        borderRadius: 50,
                                        height: 52,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginTop: 170,
                                        backgroundColor: Colors.SocialButtonColor
                                    }}>
                                    <Text style={styles.buttonText}>
                                        {'Send Code'}
                                    </Text>
                                </TouchableOpacity>
                        }
                    </KeyboardAwareScrollView>
                }
                {
                    isEmail &&
                    <KeyboardAwareScrollView >
                        <View style={styles.EmailInputContainer}>
                            <AppTextInput
                                placeholder="Email"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                LeftIcon={Images.Email}
                            />
                        </View>
                        {
                            email !== '' ?
                                <AppButton
                                    ButtonText={'Send Code'}
                                    ButtonStyle={styles.ButtonStyle}
                                    onPress={() => navigation.replace('ConfirmEmail')}
                                />
                                :
                                <TouchableOpacity
                                    onPress={() => alert('Please enter an email')}
                                    style={{
                                        width: '90%',
                                        alignSelf: 'center',
                                        borderRadius: 50,
                                        height: 52,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginTop: 130,
                                        backgroundColor: Colors.SocialButtonColor
                                    }}>
                                    <Text style={styles.buttonText}>
                                        {'Send Code'}
                                    </Text>
                                </TouchableOpacity>
                        }
                    </KeyboardAwareScrollView>
                }
            </SafeAreaView>
        </LinearGradient >
    )
}

export default SignUp

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.Background,
        flex: 1,
    },
    tabbarContainer: {
        width: '90%',
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30
    },
    tabbarstyle: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        height: 52
    },
    PhoneInputContainer: {
        width: "90%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 30
    },
    countryPickerContainer: {
        width: '30%',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        height: 52,
        backgroundColor: Colors.SocialButtonColor,
        flexDirection: "row",
        borderRadius: 12
    },
    textInputContainer: {
        color: Colors.white,
        width: '65%',
        alignItems: "center",
        paddingHorizontal: 15,
        height: 52,
        backgroundColor: Colors.SocialButtonColor,
        borderRadius: 12
    },
    ButtonStyle: {
        width: '100%',
        borderRadius: 50,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 130
    },
    buttonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 15
    },
})