import React, { Component } from 'react';
import { Text, View, WebView } from 'react-native';
styles = require('../../assets/Style');

class Read extends Component {
    state = {  }
    render() {
        return (
            <View>
                <WebView
                    source={ require('../book/index.html') }
                    style={{marginTop: 20}}
                />
            </View>
        );
    }
}

export default Read;