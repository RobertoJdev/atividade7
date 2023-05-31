import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import Axios from 'axios';
import { useNavigation, userNavigation, useRoute } from '@react-navigation/native';

export default function Home() {

    const [products, setProducts] = useState([]);
    const route = useRoute();

    useEffect(() => {
        Axios.get("https://my-json-server.typicode.com/RobertoJdev/dbjson/products")
            .then((res) => setProducts(res.data))
            .catch((error) => alert('Erro na requisição'))

    }, [route.params?.res.data])

    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.container}>Cadastro de Estoque</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.cadastrar}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.flatList}
                keyExtractor={(item, index) => item.id.toString()}
                data={products}
                renderItem={
                    ({ item }) => (
                        <TouchableOpacity style={styles.viewFlatList} onPress={() => navigation.navigate('Editar', { product: item })}>
                            <Image style={styles.image} source={{ uri: item.img ? item.img : null }} />

                            <View style={styles.viewInterna}>
                                <Text style={styles.text}>Produto: {item.titulo}</Text>
                                <Text style={styles.text}>Modelo: {item.modelo}</Text>
                                <Text style={styles.text}>Categoria: {item.categoria}</Text>
                                <Text style={styles.text}>Quantidade: {item.quantidade}</Text>
                            </View>
                        </TouchableOpacity>
                    )} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        //flex: 1,
        backgroundColor: '#fff',
        padding: 5,
    },
    text: {
        fontSize: 16,
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
