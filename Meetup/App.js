/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import {fetchMeetups} from './src/constants/api';

export default class App extends Component{
  static defaultProps = {
    fetchMeetups
  }
  state = {
    loading: false,
    meetups: []
  }
  async componentDidMount(){
    this.setState({loading:true});
    const data = await this.props.fetchMeetups();
    setTimeout(()=>this.setState({
      loading:false,
      meetups: data.meetups
    }), 2000)
  }
  render() {
    if (this.setState.loading){
      return(
        <View style={styles.container}>
          <ActivityIndicator size="large"/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        {this.state.meetups.map((meetups, i)=>(
          <Text key={i}>{meetups.title} </Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
