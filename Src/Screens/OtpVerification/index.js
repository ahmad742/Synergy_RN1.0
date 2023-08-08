import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../Utiles/Colors'
import Header from '../../Components/Header'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import AppButton from '../../Components/AppButton'

const CELL_COUNT = 6;
const OtpVerification = ({ navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <LinearGradient colors={['#101321', '#0a0e16']} style={styles.mainContainer}>
            <SafeAreaView style={{ flex: 1 }}>
                <Header
                    Heading={'Sign Up'}
                    onBackPress={() => navigation.goBack()}
                    Backicon={Images.BackIcon}
                />
                <View style={{
                    width: "90%",
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 50
                }}>
                    <Text style={{ fontSize: 24, fontWeight: '700', color: Colors.white }}>
                        {'Enter 6-Digit Code'}
                    </Text>
                </View>
                <View style={{
                    width: "90%",
                    alignSelf: "center",
                    flexDirection: "row",
                    marginTop: 20
                }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.GreyText }}>
                        {'Your code was sent to '}
                    </Text>
                    <Text style={{ fontSize: 17, fontWeight: '600', color: Colors.white }}>
                        {' +65 83794988'}
                    </Text>
                </View>
                <CodeField
                    ref={ref}
                    {...props}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />
                <View style={{
                    width: "90%",
                    alignSelf: "center",
                    flexDirection: "row",
                    marginTop: 20
                }}>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.GreyText }}>
                        {'Resend Code'}
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.white }}>
                        {'59s'}
                    </Text>
                </View>
                <View style={{
                    width: "90%",
                    alignSelf: "center",
                    flexDirection: "row",
                    marginTop: 10
                }}>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.white }}>
                        {"Didn't get a code? "}
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.AppButtonColor1 }}>
                        {'Request a phone call'}
                    </Text>
                </View>
                {
                    value !== '' ?
                        <AppButton
                            ButtonText={'Send Code'}
                            ButtonStyle={styles.ButtonStyle}
                            onPress={() => navigation.navigate('CreateUsername')}
                        />
                        :
                        <TouchableOpacity
                            onPress={() => alert('Please enter a OTP')}
                            style={{
                                width: '90%',
                                alignSelf: 'center',
                                borderRadius: 50,
                                height: 52,
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 70,
                                backgroundColor: Colors.SocialButtonColor
                            }}>
                            <Text style={styles.buttonText}>
                                {'Send Code'}
                            </Text>
                        </TouchableOpacity>
                }
            </SafeAreaView>
        </LinearGradient >
    )
}

export default OtpVerification

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
        marginTop: 70
    },
    buttonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 15
    },

})