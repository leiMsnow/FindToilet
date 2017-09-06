import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import TWebView from '../twebview'

export default class Toilet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TWebView
                    sourceUri={this.state.url}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
