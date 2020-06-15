import React, { useEffect } from 'react'
import { View, ScrollView, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import bgImg from '../../assets/backgroundImage.png';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Account (){
    const navigation = useNavigation()

    async function navigateBack() {
        navigation.goBack()
    }

    useEffect(() => {

    }, [] );

    return (
        <ImageBackground source={bgImg} style={styles.background}>
            <ScrollView>

                <View style={styles.container}>
                    <Image source={logoImg} style={styles.logo} />
                    
                <TouchableOpacity styles={styles.back} onPress={() => navigateBack()} >
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>

                <Text style={styles.title}>CONTA</Text>

                </View>
            </ScrollView>
        </ImageBackground>
    );
}