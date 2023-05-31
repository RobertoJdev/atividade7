import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import Axios from 'axios';
import { userNavigation } from '@react-navigation/native';

export default function Home() {

    return (
        <View>
            <Text>teste</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
    },
    flatList: {
        padding: 20,
    },
    viewFlatList: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 5,
    },
    cadastrar: {
        fontSize: 15,
        color: 'blue',
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    }
    ,
    viewInterna: {
        paddingHorizontal: 10,
        marginTop: 10,
    }
});
