import { FlatList, Image, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Images from '../../Assets/Images/Index'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../Utiles/Colors'
import HomeScreenHeader from '../../Components/HomeScreenHeader'
import PostCard from '../../Components/PostCard'

const HomeScreen = ({ navigation }) => {

    const storiesData = [
        {
            id: 1,
            image: Images.FacebookLogo,
            name: 'Facebook'
        },
        {
            id: 2,
            image: Images.FacebookLogo,
            name: 'Facebook'
        },
        {
            id: 3,
            image: Images.FacebookLogo,
            name: 'Facebook'
        },
        {
            id: 4,
            image: Images.FacebookLogo,
            name: 'Facebook'
        },
        {
            id: 5,
            image: Images.FacebookLogo,
            name: 'Facebook'
        },
    ]

    const _storiesRenderItem = ({ item }) => {
        return (
            <View style={styles.flatListMainContainer}>
                <View style={styles.storiesListInnerContainer}>
                    <TouchableOpacity style={styles.StoryItems}>
                        <Image style={{ width: 48, height: 48, borderRadius: 100 }} source={item.image} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.white }}>{item.name}</Text>
                </View>
            </View>
        )
    }

    const _postRenderItem = () => {
        return (
            <PostCard
                ProfileImage={Images.ProfileImage}
                UserName={'Ahmad Amir'}
                CountryName={'Dubai, Arab Emirates'}
                PostImage={Images.postImage}
                Description={"uplabsofficial🥇 'Hoom mart - Real Estate UI Kit V1' finished #1 yesterday on UpLabs congratulat... more"}
                Likes={'44,389'}
                Comments={'26,376'}
            />
        )
    }

    return (
        <LinearGradient colors={['#101321', '#0a0e16']} style={styles.mainContainer}>
            <SafeAreaView style={{ flex: 1 }}>
                <HomeScreenHeader
                    Heading={'Home Screen'}
                    onBackPress={() => navigation.goBack()}
                    RightText={'Skip'}
                    Lefticon={Images.InfoIcons}
                />
                <View style={styles.storiesMainContainer}>
                    <View style={styles.addNewStoryButtonContainer}>
                        <TouchableOpacity style={styles.AddStoryButton}>
                            <Image style={{ width: 32, height: 32 }} source={Images.Plus} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.white }}>{'New'}</Text>
                    </View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={storiesData}
                        renderItem={_storiesRenderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <FlatList
                    style={{ marginBottom: 70 }}
                    showsVerticalScrollIndicator={false}
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    renderItem={_postRenderItem}
                    keyExtractor={item => item.id}
                />

            </SafeAreaView>
        </LinearGradient >
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.Background,
        flex: 1,
    },
    flatListMainContainer: {
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: Colors.SocialButtonColor,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        margin: 8
    },
    storiesMainContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        alignSelf: "center",
        backgroundColor: Colors.SocialButtonColor,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        paddingHorizontal: 20
    },
    AddStoryButton: {
        width: 56,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        borderColor: Colors.GreyText,
        borderWidth: 1,
        borderRadius: 100
    },
    StoryItems: {
        width: 56,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        borderColor: Colors.GreyText,
        borderWidth: 1,
        borderRadius: 100
    },
    addNewStoryButtonContainer: {
        width: 56,
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    storiesListInnerContainer: {
        width: 70,
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    }
})