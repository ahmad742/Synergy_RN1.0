import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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
                    tabBarIcon: ({ focused }) => {

                        return (
                            <TouchableOpacity style={{
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
                            </TouchableOpacity>
                        )
                    }
                }}
                name=" " component={HomeScreen}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TouchableOpacity style={{
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
                            </TouchableOpacity>
                        )
                    }
                }}
                name="Search" component={Search}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TouchableOpacity style={{
                                width: 100,
                                height: 100,
                                justifyContent: "center",
                                alignItems: "center",
                                position: 'absolute',
                                top: 0,
                            }}>
                                <Image
                                    style={{
                                        width: 100,
                                        height: 100,
                                    }}
                                    resizeMode='contain'
                                    source={Images.AddPostBlue}
                                />
                            </TouchableOpacity>
                        )
                    }
                }}
                name="Home" component={HomeScreen}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TouchableOpacity style={{
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
                            </TouchableOpacity>
                        )
                    }
                }}
                name="Profile" component={Profile}
            />
        </Tab.Navigator>
    );
}


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
        </Stack.Navigator>
    );
}
export default HomeStack;