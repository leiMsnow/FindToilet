import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import List from './list';
import Utils from '../../utils/utils';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            navigator: this.props.navigator,
        };
    }

    render() {
        let data = this.state.data;
        let views1 = [];
        let views2 = [];
        for (let i in data) {
            let item = (
                <View style={styles.textItem} key={i}>
                    <TouchableOpacity style={styles.textSubItem}
                                      onPress={this._openList.bind(this, data[i].text, data[i].type)}>
                        <Text style={styles.text}>{data[i].text}</Text>
                    </TouchableOpacity>
                </View>
            );
            if (i < 2) {
                views1.push(item);
            } else {
                views2.push(item);
            }
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>分类</Text>
                <View style={styles.textView}>
                    {
                        views1
                    }
                </View>
                <View style={styles.textView}>
                    {
                        views2
                    }
                </View>
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
    title: {
        color: '#5e5e5e',
        marginBottom: 10,
        fontSize: 16,
    },
    textView: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    textItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSubItem: {
        borderWidth: Utils.pixel,
        borderColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center',
        width: (Utils.size.width - 40) / 2,
        height: 80,
    },
    text: {
        color: '#5e5e5e',
        fontSize: 16,
        fontWeight: '700',
    }
});
