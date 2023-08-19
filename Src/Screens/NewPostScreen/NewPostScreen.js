import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    PermissionsAndroid,
    Platform,
    FlatList,
    Alert,
    SafeAreaView
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import AddNewPost from '../../Components/AddNewPost';
import ImageCropPicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../Utiles/Colors';


// create a component
const NewPostScreen = ({ navigation }) => {

    useEffect(() => {
        hasAndroidPermission()
        _handleButtonPress()
    }, [])

    const [results, setResults] = useState([]);
    const [img, setimg] = useState('')
    const [selectedImage, setSelectedImage] = useState('')
    const [post, setPost] = useState()


    async function hasAndroidPermission() {
        const permission = Platform.Version >= 33 ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
            return true;
        }

        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    }



    const _handleButtonPress = async () => {
        await CameraRoll?.getPhotos({
            first: 40,
            assetType: 'Photos',
        }).then(photosList => {
            setResults(photosList.edges)
            const pic = photosList.edges[0].node.image.uri
            setimg(pic)
            setSelectedImage(pic)
        })
            .catch((err) => {
                Alert.alert(err)
            });
    };
    const openCamera = () => {
        launchCamera({}, (response) => {
            if (response.didCancel) {
                console.log('Camera was canceled');
            } else if (response.error) {
                console.log('Error occurred: ', response.error);
            } else {
                console.log('Captured image:', response.assets[0].uri);
                setSelectedImage(response.assets[0].uri)
            }
        });
    };

    const openImageCropper = () => {
        ImageCropPicker.openCropper({
            path: selectedImage,
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
        })
            .then((croppedImage) => {
                console.log('Cropped image:', croppedImage.path);
                setSelectedImage(croppedImage.path) // 
                console.log('Cropped image base64:', croppedImage.path);
                setPost(croppedImage.path)
            })
            .catch((error) => {
                console.log('Error occurred during cropping:', error);
            });
    };
    const handlePost = async () => {
        try {
            const token = await AsyncStorage.getItem('token')
            console.log('token --->', token)

            const imageUri = post
            const reference = storage().ref(`images/posts/${Date.now()}`)
            const task = reference.putFile(imageUri)
            task.then(async () => {
                const imageUrl = await reference.getDownloadURL()
                const response = await axios.post(BaseUrlPost + Api.Add_post, { token: token, post: imageUrl })
                console.log('post api response', response.data)
                if (response.data.status == 'success') {
                    setPost('');
                    navigation.navigate('HomeScreen')
                }
            })

        } catch (error) {
            console.log('error during post api call', error)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <AddNewPost
                onBackPress={() => navigation.goBack()}
                onTickPress={post ? () => handlePost() : () => openImageCropper()}
                text={"New Post"}

            />
            {/* <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center", backgroundColor: "white", height: 50 }}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={{ height: 30, width: 30, tintColor: 'black', marginLeft: 10 }} resizeMode='cover'
                            source={{ uri: 'https://img.icons8.com/?size=512&id=6483&format=png' }} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 20, fontWeight: 700, color: "black", marginLeft: 30 }}>New Post</Text>
                </View>
                <Image style={{ height: 30, width: 30, tintColor: 'skyblue', marginRight: 10 }} resizeMode='cover'
                    source={{ uri: "https://img.icons8.com/?size=512&id=39969&format=png" }} />
            </View> */}

            <View>
                <Image style={{ height: 400, width: "100%" }} resizeMode='cover'
                    source={{ uri: selectedImage }} />
            </View>
            <View style={{ height: 50, backgroundColor: 'white', justifyContent: 'space-between', alignItems: "center", flexDirection: 'row' }}>

                <TouchableOpacity onPress={() => _handleButtonPress()}>
                    <Text style={{ fontSize: 18, fontWeight: 500, color: 'black', marginLeft: 10 }}>Gallery </Text>
                </TouchableOpacity>
                <View style={{ alignItems: "center", marginRight: 10 }}>
                    <TouchableOpacity onPress={() => openCamera()}
                        style={{ height: 25, width: 25, backgroundColor: "grey", alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                        <Image
                            style={{ height: 20, width: 20, tintColor: 'white', padding: 2 }}
                            source={{ uri: "https://img.icons8.com/?size=512&id=14203&format=png" }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: "white", height: "100%" }}>
                <FlatList
                    numColumns={3}
                    data={results}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={{ margin: 1 }} onPress={() => setSelectedImage(item.node.image.uri)} activeOpacity={0.8}>
                            <Image source={{ uri: item.node.image.uri }} style={{ height: 140, width: 140 }} resizeMode='cover' />
                        </TouchableOpacity>
                    )}
                />
            </View>

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SocialButtonColor
    },
})

//make this component available to the app
export default NewPostScreen;