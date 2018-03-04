import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MeetupApi } from '../../../constants/api';
import styles from '../styles/HomeScreen';
import { LoadingScreen } from '..//../commons';

class HomeScreen extends Component {
  static defaultProps = {
    MeetupApi,
  }

  state = {
    loading: false,
    meetups: [],
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const meetups = await this.props.meetupApi.fetchGroupMeetup();
    this.setState({ loading: false, meetups });
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <View>
        <Text style={styles.root}>
          Hello World
        </Text>
      </View>
    );
  }
}

export default HomeScreen;
