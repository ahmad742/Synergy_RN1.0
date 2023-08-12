<<<<<<< Updated upstream
import React, { useState, useCallback } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import VideoComponent from '../../Components/VideoComponent';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Colors from '../../Utiles/Colors';


const ReelsScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const videos = [
        {
            url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            poster: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
        },
        {
            url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            poster: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg  ",

        },
        {
            url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            poster: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",

        },
        {
            url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            poster: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
        },
        {
            url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
            poster: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",

        },
    ]
    const renderItem = ({ item, index }) => {
        return (
            <VideoComponent
                source={{ uri: item.url }}
                paused={index == currentIndex ? false : true}
                poster={item.poster}
            />
        )
    };
    const onChangeIndex = ({ index }) => {
        setCurrentIndex(index)
    }

    return (
        <SafeAreaView style={styles.container}>
            <SwiperFlatList
                style={{ flex: 1 }}
                data={videos}
                renderItem={renderItem}
                vertical={true}
                keyExtractor={(item, index) => index.toString()}
                onChangeIndex={onChangeIndex}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Background
    },
});

export default ReelsScreen;
=======
import React, { useState, useCallback } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import VideoComponent from '../../Components/VideoComponent';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Colors from '../../Utiles/Colors';


const ReelsScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const videos = [
        {
            url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            poster: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
        },
        {
            url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            poster: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg  ",

        },
        {
            url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            poster: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",

        },
        {
            url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            poster: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
        },
        {
            url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
            poster: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",

        },
    ]
    const renderItem = ({ item, index }) => {
        return (
            <VideoComponent
                source={{ uri: item.url }}
                paused={index == currentIndex ? false : true}
                poster={item.poster}
            />
        )
    };
    const onChangeIndex = ({ index }) => {
        setCurrentIndex(index)
    }

    return (
        <SafeAreaView style={styles.container}>
            <SwiperFlatList
                style={{ flex: 1 }}
                data={videos}
                renderItem={renderItem}
                vertical={true}
                keyExtractor={(item, index) => index.toString()}
                onChangeIndex={onChangeIndex}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Background
    },
});

export default ReelsScreen;
>>>>>>> Stashed changes
