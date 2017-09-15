import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';

import RouterComponent from './Routers'

styles = require('../assets/Style');

export default class dilokbook extends Component {

    render() {
         return (
             <RouterComponent />
        );
    }
}

AppRegistry.registerComponent('dilokbook', () => dilokbook);