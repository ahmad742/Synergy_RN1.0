<<<<<<< Updated upstream
// import necessary modules
import React, { useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, SafeAreaView, Image, TouchableOpacity, useState } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Video from 'react-native-video'
import Images from '../Assets/Images/Index'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from '../Utiles/Colors';
// create a component
const VideoComponent = ({ source, paused, poster }) => {

    const insets = useSafeAreaInsets();
    const videoRef = useRef(null);
    const containerStyle = {
        height: Dimensions.get('window').height - (insets.bottom + 60),
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.videoContainer, containerStyle]}>
                <Video
                    ref={videoRef}
                    source={source}
                    resizeMode="cover"
                    style={styles.video}
                    paused={paused}
                    poster={poster}
                    repeat
                    posterResizeMode='cover'
                />
            </View>

            <View style={styles.navigationBar}>
                <View style={styles.navigationBarContent}>
                    <Image
                        source={Images.BackIcon}
                        style={styles.navigationBarIcon}
                    />
                    <View style={{
                        flexDirection: "row"
                    }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 12, color: 'white' }}>{'Following'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 12, color: 'white' }}>{'For you'}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Image
                            source={{ uri: "https://img.icons8.com/?size=512&id=11741&format=png" }}
                            style={styles.navigationBarIcon}
                        />
                    </TouchableOpacity>

                </View>

            </View>
            <View style={{ position: 'absolute', bottom: 0, right: 0, alignItems: 'flex-end', margin: 15 }}>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>

                    <TouchableOpacity>
                        <Image
                            source={{ uri: "https://img.icons8.com/?size=512&id=87&format=png" }}
                            style={styles.navigationBarIcon}
                        />

                    </TouchableOpacity>
                    <Text style={{ fontSize: 12, color: 'white' }}>60.2K</Text>
                </View>



                <View style={{ alignItems: 'center', marginBottom: 20 }}>

                    <TouchableOpacity>
                        <Image
                            source={{ uri: "https://img.icons8.com/?size=512&id=143&format=png" }}
                            style={styles.navigationBarIcon}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 12, color: 'white' }}>14M</Text>
                </View>
                <View style={{ alignItems: 'center' }}>

                    <TouchableOpacity>
                        <Image
                            source={{ uri: "https://img.icons8.com/?size=512&id=26r9lHoa3oyO&format=png" }}
                            style={styles.navigationBarIcon}
                        />

                    </TouchableOpacity>
                    <Text style={{ fontSize: 12, color: 'white' }}>543</Text>
                </View>
                <View style={{ alignItems: 'center', marginBottom: 20, marginTop: 20 }}>

                    <TouchableOpacity>
                        <Image
                            source={{ uri: "https://img.icons8.com/?size=1x&id=16252&format=png" }}
                            style={styles.navigationBarIcon}
                        />
                    </TouchableOpacity>
                    {/* <Text style={{ fontSize: 12, color: 'white' }}>60</Text> */}
                </View>

            </View>
            <View style={{ position: 'absolute', bottom: 0, width: "90%" }}>
                <View>
                    <View style={{ alignItems: "center", flexDirection: 'row', marginLeft: 15 }}>
                        <Image style={{ height: 40, width: 40, justifyContent: 'center', alignItems: "center", borderRadius: 50 }}
                            source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.YlcTNWImwX83e9YYodWTkQHaEK&pid=Api&P=0&h=180' }} />
                        <Text style={{ fontSize: 12, color: 'white', fontWeight: 700, marginLeft: 10 }}>sobi_editzz</Text>
                        <TouchableOpacity style={{ borderWidth: 1, borderRadius: 12, marginLeft: 10, padding: 8 }}>
                            <Text style={{ fontSize: 14, color: 'white', fontWeight: 700, }}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 12, color: 'white', marginLeft: 15, marginTop: 10, marginBottom: 10 }}>Remix with hashuu_</Text>
                    <Text style={{ fontSize: 12, color: 'white', marginLeft: 15, marginBottom: 50 }}>Rishta hai mera.. ..</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Background
    },
    videoContainer: {
        // width: '100%',
        // height: moderateScale(100)
        // width: scale(100),
        // height: verticalScale(100),
        // padding: moderateScale(5)
    },
    video: {
        width: '100%',
        height: '100%',

    },
    navigationBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 70,
        justifyContent: 'center',
    },
    navigationBarContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: "center"
    },
    navigationBarTitle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    navigationBarIcon: {
        height: 17,
        width: 17,
        tintColor: 'white',
        justifyContent: 'center',
        alignItems: "center",


    },
    progressBar: {
        height: 2,
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    thumbnail: {
        width: 100,
        height: 100,
        // resizeMode: 'cover'
    }
});

// make this component available to the app
export default VideoComponent;
=======
// import necessary modules
import React, { useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, SafeAreaView, Image, TouchableOpacity, useState } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Video from 'react-native-video'
import Images from '../Assets/Images/Index'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from '../Utiles/Colors';
// create a component
const VideoComponent = ({ source, paused, poster }) => {

    const insets = useSafeAreaInsets();
    const videoRef = useRef(null);
    const containerStyle = {
        height: Dimensions.get('window').height - (insets.bottom + 60),
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.videoContainer, containerStyle]}>
                <Video
                    ref={videoRef}
                    source={source}
                    resizeMode="cover"
                    style={styles.video}
                    paused={paused}
                    poster={poster}
                    repeat
                    posterResizeMode='cover'
                />
            </View>

            <View style={styles.navigationBar}>
                <View style={styles.navigationBarContent}>
                    <Image
                        source={Images.BackIcon}
                        style={styles.navigationBarIcon}
                    />
                    <View style={{
                        flexDirection: "row"
                    }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 12, color: 'white' }}>{'Following'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 12, color: 'white' }}>{'For you'}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Image
                            source={{ uri: "https://img.icons8.com/?size=512&id=11741&format=png" }}
                            style={styles.navigationBarIcon}
                        />
                    </TouchableOpacity>

                </View>

            </View>
            <View style={{ position: 'absolute', bottom: 0, right: 0, alignItems: 'flex-end', margin: 15 }}>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>

                    <TouchableOpacity>
                        <Image
                            source={{ uri: "https://img.icons8.com/?size=512&id=87&format=png" }}
                            style={styles.navigationBarIcon}
                        />

                    </TouchableOpacity>
                    <Text style={{ fontSize: 12, color: 'white' }}>60.2K</Text>
                </View>



                <View style={{ alignItems: 'center', marginBottom: 20 }}>

                    <TouchableOpacity>
                        <Image
                            source={{ uri: "https://img.icons8.com/?size=512&id=143&format=png" }}
                            style={styles.navigationBarIcon}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 12, color: 'white' }}>14M</Text>
                </View>
                <View style={{ alignItems: 'center' }}>

                    <TouchableOpacity>
                        <Image
                            source={{ uri: "https://img.icons8.com/?size=512&id=26r9lHoa3oyO&format=png" }}
                            style={styles.navigationBarIcon}
                        />

                    </TouchableOpacity>
                    <Text style={{ fontSize: 12, color: 'white' }}>543</Text>
                </View>
                <View style={{ alignItems: 'center', marginBottom: 20, marginTop: 20 }}>

                    <TouchableOpacity>
                        <Image
                            source={{ uri: "https://img.icons8.com/?size=1x&id=16252&format=png" }}
                            style={styles.navigationBarIcon}
                        />
                    </TouchableOpacity>
                    {/* <Text style={{ fontSize: 12, color: 'white' }}>60</Text> */}
                </View>

            </View>
            <View style={{ position: 'absolute', bottom: 0, width: "90%" }}>
                <View>
                    <View style={{ alignItems: "center", flexDirection: 'row', marginLeft: 15 }}>
                        <Image style={{ height: 40, width: 40, justifyContent: 'center', alignItems: "center", borderRadius: 50 }}
                            source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.YlcTNWImwX83e9YYodWTkQHaEK&pid=Api&P=0&h=180' }} />
                        <Text style={{ fontSize: 12, color: 'white', fontWeight: 700, marginLeft: 10 }}>sobi_editzz</Text>
                        <TouchableOpacity style={{ borderWidth: 1, borderRadius: 12, marginLeft: 10, padding: 8 }}>
                            <Text style={{ fontSize: 14, color: 'white', fontWeight: 700, }}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 12, color: 'white', marginLeft: 15, marginTop: 10, marginBottom: 10 }}>Remix with hashuu_</Text>
                    <Text style={{ fontSize: 12, color: 'white', marginLeft: 15, marginBottom: 50 }}>Rishta hai mera.. ..</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Background
    },
    videoContainer: {
        // width: '100%',
        // height: moderateScale(100)
        // width: scale(100),
        // height: verticalScale(100),
        // padding: moderateScale(5)
    },
    video: {
        width: '100%',
        height: '100%',

    },
    navigationBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 70,
        justifyContent: 'center',
    },
    navigationBarContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: "center"
    },
    navigationBarTitle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    navigationBarIcon: {
        height: 17,
        width: 17,
        tintColor: 'white',
        justifyContent: 'center',
        alignItems: "center",


    },
    progressBar: {
        height: 2,
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    thumbnail: {
        width: 100,
        height: 100,
        // resizeMode: 'cover'
    }
});

// make this component available to the app
export default VideoComponent;
>>>>>>> Stashed changes
