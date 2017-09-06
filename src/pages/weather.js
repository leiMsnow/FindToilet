import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import TWebView from './twebview';

export default class Weather extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TWebView sourceUri="http://localhost:63342/FindToilet/src/html/weather.html?_ijt=1mn900t731j4dg2u8a31r9cicm"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
