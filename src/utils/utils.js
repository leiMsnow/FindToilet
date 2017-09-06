import React, {Component} from 'react';
import {
    Dimensions,
    PixelRatio,
} from 'react-native';

const baseUrl = 'http://172.12.10.224:3000/data/read?type=';

module.exports = {
    size: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    pixel: 1 / PixelRatio.get(),
    get: function (type, successCallback, failCallback) {
        console.log('------请求地址-----', baseUrl + type);
        fetch(baseUrl + type)
            .then((response) => response.json())
            .then((responseJson) => {
                successCallback(responseJson);
            })
            .catch((error) => {
                failCallback(error);
            });
    }
};