import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    NavigatorIOS,
} from 'react-native';

import Category from './read/category'
import Recommend from './read/recommend'
import Search from './read/search'
import Topic from './read/topic'

import Utils from '../utils/utils'

class ReadView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Search/>
                <Divider/>
                {
                    this.state.isShow ?
                        <ScrollView>
                            <Topic/>
                            {/*<Divider/>*/}
                            {/*<Recommend/>*/}
                            <Divider/>
                            <Category/>
                            <Divider/>
                            <Recommend/>
                        </ScrollView>
                        : null
                }
            </View>
        );
    }

    // todo fetch data
    componentDidMount() {
        this.setState({
            isShow: true
        });
    }
}

class Divider extends Component {
    render() {
        return (
            <View>
                <View style={styles.divider}/>
            </View>
        );
    }
}

export default class read extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: ReadView,
                    title: '阅读',
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
    },
    divider: {
        borderColor: '#f0f0f0',
        borderWidth: Utils.pixel,
        marginTop: 10,
        marginBottom: 10,
    }
});
