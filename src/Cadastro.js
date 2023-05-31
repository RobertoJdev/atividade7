import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, TextInput, Button } from 'react-native';
import axios from 'axios';
import { userNavigation } from '@react-navigation/native';

export default function Cadastro() {
    useEffect(() => { }, []);

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [modelo, setModelo] = useState('');
    const [quantidade, setQuantidade] = useState('');


    return (
        <View style={styles.container}>

            <Image style={styles.image} />

            <TouchableOpacity>
                <Text>Carregar Imagem</Text>
            </TouchableOpacity>

            <Text
                value={titulo}
                onChangeText={(txt) => setTitulo(txt)}
                placeholder='Título'
                placeholderTextColor={'#5a5a5a'}
                style={styles.inpute}
            />
            <Text value={categoria} onChangeText={(txt) => setCategoria(txt)} placeholder='Título' placeholderTextColor={'#5a5a5a'} style={styles.inpute} />
            <Text value={modelo} onChangeText={(txt) => setModelo(txt)} placeholder='Título' placeholderTextColor={'#5a5a5a'} style={styles.inpute} />
            <Text value={quantidade} onChangeText={(txt) => setQuantidade(txt)} placeholder='Título' placeholderTextColor={'#5a5a5a'} style={styles.inpute} />

            <Button title='Cadastrar' />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        //margin: 10,
        borderRadius: 50,
        borderColor: 'gray',
    },
    inpute: {
        fontSize: 16,
        marginTop: 10,
        borderWidth: 1,
        width: '100%',
        height: 30,


    }
});
