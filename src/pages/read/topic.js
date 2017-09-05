import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import Utils from '../../utils/utils'

export default class topic extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    推荐专题
                </Text>
                <View style={styles.imageView}>
                    <View style={styles.imageItem}>
                        <Image style={styles.image}
                               resetModel="cover"
                               source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504523242445&di=75edc150d2b48e5ba0c2ddb9a1237514&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F52%2F87%2F60bOOOPICb4_1024.jpg'}}/>
                    </View>
                    <View style={styles.imageItem}>
                        <Image style={styles.image}
                               resetModel="cover"
                               source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504523242445&di=75edc150d2b48e5ba0c2ddb9a1237514&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F52%2F87%2F60bOOOPICb4_1024.jpg'}}/>
                    </View>
                </View>
                <View>
                    <Text style={styles.more}>
                        >查看更多
                    </Text>
                </View>
            </View>
        );
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
