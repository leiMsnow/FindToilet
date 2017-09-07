import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import Utils from '../../utils/utils';
import Details from './details';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            data: null,
            navigator: this.props.navigator
        }
    }

    render() {
        let data = this.state.data;
        let viewItems = [];
        if (data) {
            for (let i in data) {
                viewItems.push(
                    <TouchableOpacity style={styles.item} key={i}
                                      onPress={this._openDetails.bind(this, data[i])}>
                        <View>
                            <Image
                                style={styles.image}
                                resetModel="cover"
                                source={{uri: data[i].img}}/>
                        </View>
                        <View>
                            <Text>
                                {data[i].title}
                            </Text>
                            <Text>
                                {data[i].time}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            }
        } else {
            viewItems.push(
                <View style={styles.emptyItem} key={this.state.type}>
                    <Text>
                        没有找到{this.state.type}相关的信息
                    </Text>
                </View>
            );
        }

        return (
            <ScrollView style={styles.container}>
                {viewItems}
            </ScrollView>
        );
    }

    componentDidMount() {
        let self = this;
        Utils.get(self.state.type, function (data) {
            let obj = data.data;
            self.setState({
                data: obj
            });
        })
    }

    _openDetails(data) {
        this.state.navigator.push({
            component: Details,
            title: data.title,
            passProps: {
                url: data.url,
            }
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },
    item: {
        height: 80,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#ededed',
        borderBottomWidth: Utils.pixel,
        flexDirection: 'row',
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10,
        shadowColor: '#cccccc',
        shadowOpacity: 1,
        shadowOffset: {width: (1 * Utils.pixel), height: Utils.pixel}
    },
    emptyItem: {
        height: Utils.size.height,
        justifyContent: 'center',
        alignItems: 'center',
    }
});