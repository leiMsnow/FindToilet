import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';
import Utils from '../../utils/utils';
import List from './list';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            navigator: this.props.navigator
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                           placeholder="搜索"
                           placeholderTextColor="#9e9e9e"
                           onChangeText={(text) => this.setState({text})}
                           onSubmitEditing={this._openList.bind(this, '搜索结果', this.state.text)}
                />
            </View>
        );
    }

    _openList(title, type) {
        this.state.navigator.push({
            component: List,
            title: title,
            passProps: {
                type: type
            }
        })
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
