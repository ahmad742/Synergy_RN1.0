
import React, { useRef, useState } from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Images from '../../Assets/Images/Index'
import Colors from '../../Utiles/Colors';
import CarouselDots from '../../Components/CarousalDots';
import AppButton from '../../Components/AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userSignIn } from '../../ReduxToolKit/Slices/authSlice';
import { useDispatch } from 'react-redux';

const OnBoarding = ({ navigation }) => {
    const SLIDER_WIDTH = Dimensions.get('window').width + 90
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)

    const carouselRef = useRef()


    const [indicator, setIndicator] = useState(0)

    const OnBoardingImages = [
        {
            id: 1,
            image: Images.OnBoarding1,
            text1: 'Creating Videos \nAnd Crisp',
            text2: ' Go live with a touch and share your passion with the world!'
        },
        {
            id: 2,
            image: Images.OnBoarding3,
            text1: 'Multifunctional And Convenient Chat',
            text2: ' Go live with a touch and share your passion with the world!'
        },
        {
            id: 3,
            image: Images.OnBoarding2,
            text1: 'Creating Stories With Great Functionality',
            text2: ' Go live with a touch and share your passion with the world!'
        },
    ]

    const OnBoardingRenderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <Image style={styles.onBoardImage} source={item.image} />
                <Text style={styles.onBoardText}>{item.text1}</Text>
                <Text style={styles.onBoardText2}>{item.text2}</Text>
            </View>
        );
    }

    const dispatch=useDispatch()
    const onSkipPress = () => {
        console.log('hello')
        AsyncStorage.getItem('token').then((val) => {
            if (val == undefined) {

                navigation.navigate('AuthStack')

            } else {
                dispatch(userSignIn(val))
                navigation.navigate('HomeStack')

            }
        })
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <TouchableOpacity
                onPress={() => onSkipPress()}
                style={styles.SkipContainer}>
                <Text style={styles.SkipText}>
                    {'Skip'}
                </Text>
            </TouchableOpacity>
            <View style={{ height: '80%', alignItems: 'center' }}>
                <Carousel
                    ref={carouselRef}
                    layout={'default'}
                    data={OnBoardingImages}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    renderItem={OnBoardingRenderItem}
                    onSnapToItem={(index) => {
                        setIndicator(index);
                    }}
                />
            </View>
            <View style={{ height: '5%', alignItems: 'center' }}>
                <CarouselDots
                    selectedIndex={indicator}
                    showSkip={true}
                    count={3}
                    onSnapToItem={(index) => {
                        setIndicator(index);
                    }}
                />
            </View>
            <AppButton
                ButtonText={'Continue'}
                ButtonStyle={{ marginTop: 30 }}
                onPress={() => onSkipPress()}
                RightIcon={Images.RightArrow}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.Background,
    },
    onBoardImage: {
        width: "100%",
        alignSelf: 'center',
        height: "70%",
    },
    slide: {
        width: "85%",
        alignSelf: 'center',
    },
    onBoardText: {
        color: Colors.white,
        fontSize: 26,
        fontWeight: '700',
        textAlign: 'center',
        width: 300,
        alignSelf: 'center',
        lineHeight: 38,
        marginTop: 20
    },
    onBoardText2: {
        color: Colors.GreyText,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: 24,
        marginTop: 20,
        width: 300,
        alignSelf: 'center'
    },
    SkipContainer: {
        width: "90%",
        alignSelf: "center",
        alignItems: "flex-end"
    },
    SkipText: {
        color: Colors.GreyText,
        fontSize: 16,
        fontWeight: '500'
    },
});

export default OnBoarding;
