import React, {useState} from 'react';
import {View, Image, StyleSheet, StatusBar, Text, Pressable, TextInput, Button, Alert, FlatList} from 'react-native';

function TableScreen(props) {
    const [orders, setOrders] = useState([
        {id: 0, name: 'Test name 0', customer: 'Test customer 0', comment: 'Test comment 0'},
        {id: 1, name: 'Test name 1', customer: 'Test customer 1', comment: 'Test comment 1'},
        {id: 2, name: 'Test name 2', customer: 'Test customer 2', comment: 'Test comment 2'},
    ]);
    const [inputValue, setInputValue] = useState({
        id: Date.now().toString(),
        name: '',
        customer: '',
        comment: '',
    });

    const removeOrder = id => {
        setOrders(prev => prev.filter(order => order.id !== id))
    }

    const addOrder = (name, customer, comment) => {
        setOrders(prev => [...prev, {
            id: Date.now().toString(),
            name,
            customer,
            comment,
        }])
    }
    
    const pressHandler = () => {
        if (inputValue.name.trim() && inputValue.customer.trim() && inputValue.comment.trim()) {
            addOrder(inputValue.name, 
                inputValue.customer, 
                inputValue.comment);
            setInputValue({
                id: Date.now().toString(),
                name: '',
                customer: '',
                comment: '',
            })
        } else {
            Alert.alert('Wrong input (not specific input parameter)')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.context}>
                <Text style={{fontSize: 30}}>Add order for Table {props.route.params.number}</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Name...'
                    onChangeText={text => setInputValue({
                        id: Date.now().toString(),
                        name: text,
                        customer: inputValue.customer,
                        orderString: inputValue.orderString,
                        comment: inputValue.comment,
                    })}
                    value={inputValue.name}
                    autoCorrect={false}
                    autoCapitalize="none"/>
                <TextInput 
                    style={styles.input} 
                    placeholder='Customer name...'
                    onChangeText={text => setInputValue({
                        id: Date.now().toString(),
                        name: inputValue.name,
                        customer: text,
                        orderString: inputValue.orderString,
                        comment: inputValue.comment,
                    })}
                    value={inputValue.customer}
                    autoCorrect={false}
                    autoCapitalize="none"/>
                <TextInput
                    style={styles.input} 
                    placeholder='Comment...'
                    onChangeText={text => setInputValue({
                        id: Date.now().toString(),
                        name: inputValue.name,
                        customer: inputValue.customer,
                        orderString: inputValue.orderString,
                        comment: text,
                    })}
                    value={inputValue.comment}
                    autoCorrect={false}
                    autoCapitalize="none"/>
                <Button title='Add order' onPress={pressHandler}/>
            </View>
            <View style={styles.list}>
            <Text style={{fontSize: 30, alignSelf: 'center'}}>Orders</Text>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={orders}
                inverted={true}
                renderItem={({item}) => 
                    <Pressable 
                        onPress={() => props.navigation.navigate('Order', { id: item.id.toString(), index: orders.indexOf(item)})} 
                        onLongPress={() => removeOrder(item.id)}
                    >
                        <Text style={styles.listObject}>{item.name}, {item.customer}, {item.comment}</Text>
                    </Pressable>
                }
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    context: {
        height: '50%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        height: '50%',
        width: '100%',
        paddingHorizontal: 20,
    },
    listObject: {
        padding: 20,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 30,
        margin: 5,
    },
    input: {
        padding: 10,
        margin: 5,
        width: '75%',
        height: 60,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: 'black',
        fontSize: 20,
    },
})

export default TableScreen