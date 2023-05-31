import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, TextInput, Button, Alert } from 'react-native';
import Axios from 'axios';
import { useNavigation, userNavigation, useRoute } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';

export default function Editar() {

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [modelo, setModelo] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [img, setImg] = useState('');
    const [id, setId] = useState('');

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {

        const product = route.params.product;

        setTitulo(product.titulo);
        setCategoria(product.categoria);
        setModelo(product.modelo);
        setQuantidade(product.quantidade);
        setImg(product.img);
        setId(product.id);
    }, []);

    const selectImage = () => {
        //ImagePicker.showImagePicker({}, (res) => setImg(res.uri));
        ImagePicker.showImagePicker({}, res => setImg(res.uri));
    }

    const saveProduct = () => {

        if (titulo === '') {
            alert("Favor preencher os dados!");
        } else {
            Axios.patch('https://my-json-server.typicode.com/RobertoJdev/dbjson/products/' + id, {
                titulo,
                categoria,
                modelo,
                quantidade,
                img,
            }).then((res) => {
                alert('Salvo com sucesso!');
                console.log(res.data);
                navigation.navigate('Home', { res });
            }).catch(() => Alert('Ocorreu algum erro!'))
        }

    }

    const deleteProduct = () => {

        Axios.delete('https://my-json-server.typicode.com/RobertoJdev/dbjson/products/' + id, {
            titulo,
            categoria,
            modelo,
            quantidade,
            img,
        }).then((res) => {
            alert('Deletado com sucesso!');
            console.log(res.data);
            navigation.navigate('Home', { res });
        }).catch(() => Alert('Ocorreu algum erro!'));

    }

    return (
        <View style={styles.container}>


            <TouchableOpacity onPress={selectImage} >
                <Image style={styles.image} source={{ uri: img ? img : null }} />
                <Text>Carregar Imagem</Text>
            </TouchableOpacity>

            <TextInput
                value={titulo}
                onChangeText={(txt) => setTitulo(txt)}
                placeholder='Título'
                placeholderTextColor={'#5a5a5a'}
                style={styles.inpute}
            />
            <TextInput value={categoria} onChangeText={(txt) => setCategoria(txt)}
                placeholder='Categoria' placeholderTextColor={'#5a5a5a'} style={styles.inpute} />
            <TextInput value={modelo} onChangeText={(txt) => setModelo(txt)}
                placeholder='Modelo' placeholderTextColor={'#5a5a5a'} style={styles.inpute} />
            <TextInput value={quantidade} onChangeText={(txt) => setModelo(txt)}
                placeholder='Quantidade' placeholderTextColor={'#5a5a5a'} style={styles.inpute} />

            <View style={styles.button}>
                <Button style={styles.button} onPress={saveProduct} title='Salvar' />
            </View>
            <Button style={styles.buttonDelete} onPress={deleteProduct} title='Apagar' color={'#FF0000'} />

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
        borderWidth: 1,
    },
    inpute: {
        fontSize: 16,
        marginTop: 10,
        borderWidth: 1,
        width: '100%',
        height: 50,
        borderRadius: 10,
        padding: 10,
    },
    button: {
        padding: 10,
        margin: 10,
    },
    buttonDelete: {
        //backgroundColor: '#FF0000',
        //color: '#FF0000',
    }
});
