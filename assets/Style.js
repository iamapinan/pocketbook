import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

var {width, height} = Dimensions.get('window');

module.exports = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        flexDirection: "column",
    },
    HomeImageBG: {
        resizeMode: 'stretch',
        flex: 1,
        width: window.width,
        height: window.height
    },
    namebar:{
        height: null,
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 20,
        backgroundColor: 'rgba(20,20,20, 0.7)',
        paddingTop: 10,
    },
    body:{
        flex: 5,
        backgroundColor: 'rgba(20,20,20, 0.7)',
        marginTop: 25,
        padding:15,
    },
    bannerHome: {
        flex: 3,
        backgroundColor: '#000'
    },
    bodyText: {
        color: '#fff',
        fontSize: 18
    },
    bannerImg:{
        width: window.width,
        height: 200,
    },
    bottomMenu:{
        flex: 1,
        backgroundColor: 'rgb(192, 57, 43)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tagname: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#aaa',
        fontSize: 16
    }
}); 