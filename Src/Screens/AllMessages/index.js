import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text,
    FlatList,
    Pressable,
    ScrollView,
} from 'react-native'
import React from 'react'
import AllChatsHeader from '../../Components/AllChatsHeader'
import Images from '../../Assets/Images/Index'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../Utiles/Colors'

const AllMessages = ({ navigation }) => {
    const onlineUserData = [
        {
            id: 1,
            name: 'Alexander',
            image: Images.ProfileImage
        },
        {
            id: 2,
            name: 'Alexander',
            image: Images.ProfileImage
        },
        {
            id: 3,
            name: 'Alexander',
            image: Images.ProfileImage
        },
        {
            id: 4,
            name: 'Alexander',
            image: Images.ProfileImage
        },
        {
            id: 5,
            name: 'Alexander',
            image: Images.ProfileImage
        },
    ]

    const _onlineUseRenderItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <LinearGradient colors={['#191D2B', '#090D14']}
                    style={{
                        width: 100,
                        height: 103,
                        borderRadius: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 5
                    }}
                >
                    <View style={{
                        width: 52,
                        height: 52,
                        borderRadius: 100,
                        backgroundColor: '#101421',
                        justifyContent: "center",
                        alignItems: 'center',
                        borderWidth: 0.5,
                        borderColor: Colors.GreyText
                    }}>
                        <Image style={{ width: 44, height: 44, borderRadius: 100 }}
                            source={item.image}
                        />
                        <View style={{
                            width: 8,
                            height: 8,
                            backgroundColor: "#2AD983",
                            borderRadius: 20,
                            position: 'absolute',
                            top: 7,
                            right: 7
                        }}></View>
                    </View>
                    <Text style={{
                        color: Colors.white,
                        fontSize: 16,
                        fontWeight: '600'
                    }}>{item.name}</Text>

                </LinearGradient>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{
            backgroundColor: Colors.Background,
            flex: 1
        }}>
            <AllChatsHeader
                Username='Vitaliy Dorozho'
                useProfile={Images.Add}
                status='online'
                onBackPress={() => navigation.goBack()}
                placeholder={'Search People'}
            />
            <FlatList
                style={{
                    width: '95%',
                    alignSelf: 'center',
                    marginTop: 20
                }}
                horizontal
                data={onlineUserData}
                renderItem={_onlineUseRenderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default AllMessages

const styles = StyleSheet.create({})