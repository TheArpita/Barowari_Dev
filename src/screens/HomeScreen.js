import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import client from '../../sanity';
// import Categories from '../components/Categories';
// import FeaturedRow from '../components/FeaturedRow';

// const img = require('../../assets/images/rider.jpeg');



const HomeScreen = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(()=>{
        navigation.setOptions({headerShown: false})
    }, []);

    return(
        <SafeAreaView>
            {console.log('home...')}
            <StatusBar>
                <View>
                    <Text>Home page</Text>
                    <TouchableOpacity>
                        <Text>touch</Text>

                    </TouchableOpacity>
                </View>
            </StatusBar>
        </SafeAreaView>
    )
};

export default HomeScreen;