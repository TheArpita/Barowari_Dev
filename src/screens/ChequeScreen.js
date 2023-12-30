import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const ChequeScreen = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(()=>{
        // navigation.setOptions({headerShown: false})
    }, []);

    return(
        // <SafeAreaView>
        //     <StatusBar>
                <View>
                    <Text>Chequebook page</Text>
                    <TouchableOpacity>
                        <Text>touch</Text>
                        
                    </TouchableOpacity>
                </View>
            // </StatusBar>
        //</SafeAreaView> 
    )
};

export default ChequeScreen;