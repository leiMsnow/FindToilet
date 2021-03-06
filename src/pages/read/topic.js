import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import Utils from '../../utils/utils';
import Details from './details';

export default class topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            navigator: this.props.navigator
        };
    }

    render() {
        let viewItems = [];
        let data = this.state.data;
        for (let i in data) {
            viewItems.push(
                <TouchableOpacity style={styles.imageItem} key={i}
                                  onPress={this._openDetails.bind(this, data[i])}>
                    <Image style={styles.image}
                           resetModel="cover"
                           source={{uri: data[i].img}}/>
                </TouchableOpacity>
            )
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    推荐专题
                </Text>
                <View style={styles.imageView}>
                    {viewItems}
                </View>
                <View>
                    <Text style={styles.more}>
                        >查看更多
                    </Text>
                </View>
            </View>
        );
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
            marginLeft: 10,
            marginRight: 10,
        },
        imageView: {
            flexDirection: 'row',
        },
        imageItem: {
            flex: 1,
        },
        image: {
            width: (Utils.size.width - 30) / 2,
            height: 80,
            borderRadius: 5,
        },
        title: {
            color: '#5e5e5e',
            marginBottom: 10,
            fontSize: 16,
        },
        more: {
            color: '#cccccc',
            marginTop: 10,
            marginBottom: 10,
            fontSize: 14,
            fontWeight: '300'
        }
    })
;
