import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import HomeMsg from './HomeMsg';
import Read from './Read';

styles = require('../../assets/Style');


export default class Home extends Component {

    constructor ( props ) {
        super(props);
        this.state = {
            readme: 'No'
        }
    }

    alertMe = () => {
        return (
            <Read />
        )
    }
    
    render() {
         return (
            <Image source={require('../../assets/background-home.png')} style={styles.HomeImageBG}>
                <View style={styles.container}>
                    <View style={styles.namebar}>
                        <Text style={styles.tagname}>ดิลก พัฒน์วิชัยโชติ</Text>
                        <Text style={styles.subtitle} subtitle>ผู้แต่งเสียงกู่ จากครูใหญ่</Text>
                    </View>
                    <View style={styles.bannerHome}>
                        <Image source={ require('../../assets/dilog.png') } style={ styles.bannerImg }/>
                    </View>
                    <View style={styles.body}>
                        <ScrollView>
                            <HomeMsg/>
                        </ScrollView>
                    </View>
                    <View style={styles.bottomMenu}>
                        <Button
                        onPress={this.alertMe}
                        title="อ่าน เสียงกู่จากครูใหญ่"
                        color="#fff"
                        />
                    </View>
                </View>
            </Image>
        );
    }
}