import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';
import Utils from '../../utils/utils';

export default class Search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="搜索" placeholderTextColor="#9e9e9e"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        marginTop: 30,
        height: 35,
        borderWidth: Utils.pixel,
        borderColor: '#eeeeee',
        borderRadius: 5,
        paddingLeft: 5,

    }
});
