import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen';
import Images from '../../Assets/Images/Index'
import Colors from '../../Utiles/Colors';
import Search from '../../Screens/Search';
import Profile from '../../Screens/Profile';
import Chat from '../../Screens/Chat';
import AllMessages from '../../Screens/AllMessages';
import ReelsScreen from '../../Screens/Reels/ReelsScreen';
import NewPostScreen from '../../Screens/NewPostScreen/NewPostScreen';
import VideoCall from '../../Screens/VideoCall/VideoCall';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    width: '100%',
                    position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: Colors.SocialButtonColor,
                    height: 82,
                    borderTopWidth: 0,
                }
            }}
            initialRouteName={
                'HomeScreen'
            }
        >
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{
                                width: 50,
                                height: 50,
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <View style={{
                                    width: 32,
                                    height: 5,
                                    backgroundColor: focused ? Colors.white : Colors.GreyText,
                                    borderTopColor: focused ? Colors.white : Colors.GreyText,
                                    borderTopWidth: 1,
                                    borderBottomRightRadius: 10,
                                    borderBottomLeftRadius: 10,
                                    position: "absolute",
                                    top: 0
                                }}></View>
                                <Image
                                    style={{
                                        width: 27,
                                        height: 27,
                                        tintColor: focused ? Colors.white : Colors.GreyText,
                                    }}
                                    resizeMode='contain'
                                    source={Images.Home}
                                />
                            </View>
                        )
                    }
                }}
                name="HomeScreen" component={HomeScreen}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{
                                width: 50,
                                height: 50,
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <View style={{
                                    width: 32,
                                    height: 5,
                                    backgroundColor: focused ? Colors.white : Colors.GreyText,
                                    borderTopColor: focused ? Colors.white : Colors.GreyText,
                                    borderTopWidth: 1,
                                    borderBottomRightRadius: 10,
                                    borderBottomLeftRadius: 10,
                                    position: "absolute",
                                    top: 0
                                }}></View>
                                <Image
                                    style={{
                                        width: 27,
                                        height: 27,
                                        tintColor: focused ? Colors.white : Colors.GreyText,
                                    }}
                                    resizeMode='contain'
                                    source={Images.Search}
                                />
                            </View>
                        )
                    }
                }}
                name="ReelsScreen" component={ReelsScreen}
            />
            <Tab.Screen
                name='NewPostScreen'
                component={NewPostScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        display: 'none'
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            top: -20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            // ...styles.shadow,
                            width: 100,
                            height: 100,
                        }}>
                            <Image
                                source={Images.AddPostBlue}
                                style={{ width: 100, height: 100 }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{
                                width: 50,
                                height: 50,
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <View style={{
                                    width: 32,
                                    height: 5,
                                    backgroundColor: focused ? Colors.white : Colors.GreyText,
                                    borderTopColor: focused ? Colors.white : Colors.GreyText,
                                    borderTopWidth: 1,
                                    borderBottomRightRadius: 10,
                                    borderBottomLeftRadius: 10,
                                    position: "absolute",
                                    top: 0
                                }}></View>
                                <Image
                                    style={{
                                        width: 27,
                                        height: 27,
                                        tintColor: focused ? Colors.white : Colors.GreyText,
                                    }}
                                    resizeMode='contain'
                                    source={Images.Pin}
                                />
                            </View>
                        )
                    }
                }}
                name="AllMessages" component={AllMessages}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{
                                width: 50,
                                height: 50,
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <View style={{
                                    width: 32,
                                    height: 5,
                                    backgroundColor: focused ? Colors.white : Colors.GreyText,
                                    borderTopColor: focused ? Colors.white : Colors.GreyText,
                                    borderTopWidth: 1,
                                    borderBottomRightRadius: 10,
                                    borderBottomLeftRadius: 10,
                                    position: "absolute",
                                    top: 0
                                }}></View>
                                <Image
                                    style={{
                                        width: 27,
                                        height: 27,
                                        tintColor: focused ? Colors.white : Colors.GreyText,
                                    }}
                                    resizeMode='contain'
                                    source={Images.Profile}
                                />
                            </View>
                        )
                    }
                }}
                name="Profile" component={Profile}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10, },
        shadowOpacity: .25,
        shadowRadius: 3.5,
        elevation: 5,
    },
})


function HomeStack() {
    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='TabStack'
        >
            <Stack.Screen name="TabStack" component={TabStack} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="AllMessages" component={AllMessages} />
            <Stack.Screen name="ReelsScreen" component={ReelsScreen} />
            <Stack.Screen name="VideoCall" component={VideoCall} />

        </Stack.Navigator>
    );
}
export default HomeStack;