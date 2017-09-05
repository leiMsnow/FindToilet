import React, {Component} from 'react';
import {
    StyleSheet,
    WebView,
    View,
    Text,
} from 'react-native';


export default class TWebView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sourceUri: this.props.sourceUri,
            isError: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.isError ?
                        <View style={styles.error}>
                            <Text>网络连接错误，请重试</Text>
                        </View>
                        :
                        <WebView
                            style={styles.container}
                            source={{uri: this.state.sourceUri}}
                            startInLoadingState={true}
                            onError={this._showError.bind(this)}
                        />
                }


            </View>
        );
    }

    _showError() {
        this.setState({
            isError: true
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    error: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
