import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Utils from '../../utils/utils';

export default class Recommend extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    热门推荐
                </Text>
                <View style={styles.imageView}>
                    <RecommendItem
                        sourceUri='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504523242445&di=75edc150d2b48e5ba0c2ddb9a1237514&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F52%2F87%2F60bOOOPICb4_1024.jpg'
                        title='标题'/>
                    <RecommendItem
                        sourceUri='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504523242445&di=75edc150d2b48e5ba0c2ddb9a1237514&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F52%2F87%2F60bOOOPICb4_1024.jpg'
                        title='标题'/>
                    <RecommendItem
                        sourceUri='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504523242445&di=75edc150d2b48e5ba0c2ddb9a1237514&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F52%2F87%2F60bOOOPICb4_1024.jpg'
                        title='标题'/>
                    <RecommendItem
                        sourceUri='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504523242445&di=75edc150d2b48e5ba0c2ddb9a1237514&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F52%2F87%2F60bOOOPICb4_1024.jpg'
                        title='标题'/>
                </View>

                <View style={styles.imageView}>
                    <RecommendItem
                        sourceUri='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504523242445&di=75edc150d2b48e5ba0c2ddb9a1237514&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F52%2F87%2F60bOOOPICb4_1024.jpg'
                        title='标题'/>
                    <RecommendItem
                        sourceUri='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504523242445&di=75edc150d2b48e5ba0c2ddb9a1237514&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F52%2F87%2F60bOOOPICb4_1024.jpg'
                        title='标题'/>
                    <RecommendItem
                        sourceUri='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504523242445&di=75edc150d2b48e5ba0c2ddb9a1237514&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F52%2F87%2F60bOOOPICb4_1024.jpg'
                        title='标题'/>
                    <RecommendItem
                        sourceUri='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504523242445&di=75edc150d2b48e5ba0c2ddb9a1237514&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F52%2F87%2F60bOOOPICb4_1024.jpg'
                        title='标题'/>
                </View>

            </View>
        );
    }
}

class RecommendItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sourceUri: this.props.sourceUri,
            title: this.props.title,
        }
    }

    render() {
        return (
            <View style={styles.imageItem}>
                <Image style={styles.image}
                       resetModel="cover"
                       source={{uri: this.state.sourceUri}}/>
                <Text style={styles.contentText} numberOfLines={2}>{this.state.title}</Text>
            </View>
        );
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
    imageView: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    imageItem: {
        flex: 1,
    },
    image: {
        width: (Utils.size.width - 50) / 4,
        height: 120,
        shadowColor: '#cccccc',
        shadowOpacity: 1,
        shadowOffset: {width: (1 * Utils.pixel), height: Utils.pixel}
    },
    contentText: {
        marginTop: 5,
        fontSize: 12,
        width: (Utils.size.width - 50) / 4,
        color: '#818181',
    }
});
