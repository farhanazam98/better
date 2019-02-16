import React, { Component } from 'react';
import { View, StyleSheet,SafeAreaView, TextInput,Button, Alert, Form } from 'react-native';
import moment from "moment";
import JournalEntry from './src/components/journalEntry'
import CalendarStrip from 'react-native-calendar-strip';


export default class calendar extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <CalendarStrip
          style={{height:125, paddingTop: 20, paddingBottom: 10}}
        />
        <JournalEntry/>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: {
    flex: 1,
    backgroundColor: '#ddd'
  }
});