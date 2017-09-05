import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Utils from '../../utils/utils'

export default class Category extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>分类</Text>
                <CategoryItem
                    categoryNameLeft='金融'
                    categoryNameRight='管理'/>
                <CategoryItem
                    categoryNameLeft='互联网'
                    categoryNameRight='散文'/>
            </View>
        );
    }
}

class CategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryNameLeft: this.props.categoryNameLeft,
            categoryNameRight: this.props.categoryNameRight
        };
    }

    render() {
        return (
            <View style={styles.textView}>
                <View style={styles.textItem}>
                    <View style={styles.textSubItem}>
                        <Text style={styles.text}>{this.state.categoryNameLeft}</Text>
                    </View>
                </View>
                <View style={styles.textItem}>
                    <View style={styles.textSubItem}>
                        <Text style={styles.text}>{this.state.categoryNameRight}</Text>
                    </View>
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
