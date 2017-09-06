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
            isShow: false,
            recommendTopic: [],
            hotTopic: [],
            category: [],
            other: [],
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Search/>
                <Divider/>
                {
                    this.state.isShow ?
                        <ScrollView style={styles.container}>
                            <Topic data={this.state.recommendTopic}/>
                            <Divider/>
                            <Recommend name="热门推荐" data={this.state.hotTopic}/>
                            <Divider/>
                            <Category data={this.state.category} navigator={this.props.navigator}/>
                            <Divider/>
                            <Recommend name="清新一刻" data={this.state.other}/>
                        </ScrollView>
                        : null
                }
            </View>
        );
    }

    componentDidMount() {
        let self = this;
        Utils.get('config', function (data) {
            if (data.status === 1) {
                let obj = data.data;
                let recommendTopic = obj.recommendTopic;
                let hotTopic = obj.hotTopic;
                let category = obj.category;
                let other = obj.other;
                self.setState({
                    isShow: true,
                    recommendTopic: recommendTopic,
                    hotTopic: hotTopic,
                    category: category,
                    other: other,
                });
            }
        }, function (error) {
            console.log(error);
        })
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
                    title: 'read',
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
        marginBottom: 30
    },
    divider: {
        borderColor: '#f0f0f0',
        borderWidth: Utils.pixel,
        marginTop: 10,
        marginBottom: 10,
    }
});
