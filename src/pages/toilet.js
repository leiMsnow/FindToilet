import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import TWebView from './twebview'

export default class Toilet extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TWebView
                    sourceUri="http://localhost:63342/FindToilet/src/html/nearby.html?_ijt=bepkemscr7vhufhj09v3r7vhcc"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
