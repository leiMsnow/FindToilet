import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';

export default class About extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.text}>作者联系方式: always_0122@163.com</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 15,
        marginLeft: 10,
        marginTop: 3
    }
});

module.exports = About;