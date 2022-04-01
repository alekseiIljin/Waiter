import React, {useState} from 'react'
import {View, StyleSheet, Text, Alert, FlatList, Button, Pressable} from 'react-native'

function OrderScreen(props) {
    const menu = [
        {id: '0', name: 'Pizza', price: '8.00'},
        {id: '1', name: 'Bread', price: '2.00'},
        {id: '2', name: 'Salad', price: '3.00'},
        {id: '3', name: 'Soup', price: '4.85'},
        {id: '4', name: 'Pasta', price: '6.00'},
        {id: '5', name: 'Wine 750 ml.', price: '20.00'},
        {id: '6', name: 'Water, 500 ml.', price: '1.00'},
    ]

    const [order, setOrder] = useState([]);
    const [total, setTotal] = useState(0);

    const addProduct = (name, price) => {
        setOrder(prev => [...prev, {
            id: Date.now().toString(),
            name,
            price,
        }])
        setTotal(total => total + parseFloat(price))
    }
    const removeProduct = prod => {
        setOrder(prev => prev.filter(product => product.id !== prod.id))
        setTotal(total => total - parseFloat(prod.price))
    }

    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <Text style={{position: 'absolute', top: 0, left: 0}}>
                    Id: {props.route.params.id}, Index: {props.route.params.index}, Menu:
                </Text>
                {menu.map(prod => (
                <Pressable key={prod.id} onPress={() => {
                    addProduct(prod.name, prod.price)
                }}>
                    <Text style={styles.listObject}>{prod.name}, {prod.price} Eur.</Text>
                </Pressable>))}
            </View>
            <View style={styles.list}>
                <Text style={{fontSize: 30, alignSelf: 'center'}}>Order products</Text>
                <FlatList
                keyExtractor={item => item.id.toString()}
                data={order}
                renderItem={({item}) => 
                    <Pressable onLongPress={() => removeProduct(item)}>
                        <Text style={styles.listObject}>{item.id}, {item.name}, {item.price}</Text>
                    </Pressable>
                }
                />
                <Text>Total: {total}</Text>
                <Button title='Proceed' onPress={() => Alert.alert('Not implemented yet')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    menu: {
        height: '50%',
        width: '100%',
        paddingTop: 12,
    },
    list: {
        height: '50%',
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    listObject: {
        padding: 20,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 12,
        margin: 5,
    },
})

export default OrderScreen;