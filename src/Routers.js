import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';

import Home from './component/Home'

export default class Routers extends Component {
    state = {  }
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene
                        key='Home'
                        Component={Home}
                        hideNavBar={true}
                    />
                </Scene>
            </Router>
        );
    }
}

