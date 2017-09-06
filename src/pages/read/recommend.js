import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import Utils from '../../utils/utils';
import Details from './details';


export default class Recommend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            data: this.props.data,
            navigator: this.props.navigator,
        };
    }

    render() {
        let data = this.state.data;
        let view1 = [];
        let view2 = [];
        for (let i in data) {
            if (i < 4) {
                view1.push(
                    <TouchableOpacity style={styles.imageItem} key={i}
                                      onPress={this._openDetails.bind(this, data[i])}>
                        <Image style={styles.image}
                               resetModel="cover"
                               source={{uri: data[i].img}}/>
                        <Text style={styles.contentText} numberOfLines={2}>{data[i].title}</Text>
                    </TouchableOpacity>
                );
            } else {
                view2.push(
                    <TouchableOpacity style={styles.imageItem} key={i}
                                      onPress={this._openDetails.bind(this, data[i])}>
                        <Image style={styles.image}
                               resetModel="cover"
                               source={{uri: data[i].img}}/>
                        <Text style={styles.contentText} numberOfLines={2}>{data[i].title}</Text>
                    </TouchableOpacity>
                );
            }
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {
                        this.state.name
                    }
                </Text>
                <View style={styles.imageView}>
                    {
                        view1
                    }
                </View>

                <View style={styles.imageView}>
                    {
                        view2
                    }
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
