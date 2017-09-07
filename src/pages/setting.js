import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    NavigatorIOS,
} from 'react-native';

import Help from './setting/help';
import Detail from './setting/detail';
import About from './setting/about';
import Tips from './setting/tips';
import Utils from '../utils/utils';

class SettingView extends Component {

    render() {
        let items = ['功能介绍', '帮助中心', '关于作者', '协议条款'];
        let itemViews = [];
        for (let i in items) {
            itemViews.push(
                <TouchableOpacity styole={styles.item}
                                  onPress={this._openHelp.bind(this, items[i])}
                                  key={i}>
                    <Text style={styles.text}>{items[i]}</Text>
                </TouchableOpacity>
            );
        }
        return (
            <View style={styles.container}>
                {itemViews}
            </View>
        );
    }

    _openHelp(title) {
        let page = Help;
        switch (title) {
            case '功能介绍':
                page = Detail;
                break;
            case '帮助中心':
                page = Help;
                break;
            case '关于作者':
                page = About;
                break;
            case '协议条款':
                page = Tips;
                break;
        }

        this.props.navigator.push({
            component: page,
            title: title
        });
    }
}

export default class Setting extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: SettingView,
                    title: 'setting',
                    navigationBarHidden: true,
                }}
                style={{flex: 1}}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
    item: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#ededed',
        borderBottomWidth: Utils.pixel,
        justifyContent: 'center',
    },
    text: {
        height: 40,
        marginRight: 10,
        marginLeft: 10,
    }

});
