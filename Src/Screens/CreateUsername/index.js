import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../Utiles/Colors'
import Header from '../../Components/Header'
import Images from '../../Assets/Images/Index'
import AppTextInput from '../../Components/AppTextInput'
import AppButton from '../../Components/AppButton'
import { checkUserName } from '../../api/methods/auth'

const CreatePassword = ({ navigation,route }) => {

    const obj=route.params.data
    const [username, setUsername] = useState('')
    const [data,setData]=useState(obj)
    const onContinuePress=async()=>{
        if (username == '') {
            alert('Enter an UserName')
        }else{
            try {
                const response = await checkUserName({
                    "username": username,
                })
                console.log('UserNameAPI Response', response.data)
                if(response.data.status=='success'){
                    let userdata={...data,username:username}
                    navigation.navigate('CreatePassword',{userdata:userdata})
                    
                }else{
                    alert(response.data.message)
                }
            } catch (error) {
                console.log('UserNameAPI Error', error)
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
                        {'Create Username'}
                    </Text>
                </View>
                <View style={{
                    width: "90%",
                    alignSelf: "center",
                    marginTop: 20,
                    alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.GreyText }}>
                        {'You can always change it later '}
                    </Text>
                </View>
                <AppTextInput
                    placeholder='Username'
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    rightIcon={Images.CLose}
                    LeftIcon={Images.User}
                />

                {
                    username !== '' ?
                        <AppButton
                            ButtonText={'Continue'}
                            ButtonStyle={styles.ButtonStyle}
                            onPress={() => onContinuePress()}
                        />
                        :
                        <TouchableOpacity
                            onPress={() => alert('Please enter a username')}
                            style={{
                                width: '90%',
                                alignSelf: 'center',
                                borderRadius: 50,
                                height: 52,
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 90,
                                backgroundColor: Colors.SocialButtonColor
                            }}>
                            <Text style={styles.buttonText}>
                                {'Continue'}
                            </Text>
                        </TouchableOpacity>
                }
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
        marginTop: 90
    },
    buttonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 15
    },

})