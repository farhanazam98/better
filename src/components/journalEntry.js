import React, { Component } from 'react';
import { View, StyleSheet,SafeAreaView, TextInput,Button, Alert } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';


class JournalEntry extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: false };
    }
    render() {
    return (
      <SafeAreaView style={styles.safeArea}>
      <View style = {styles.container}>
      <TextInput
          style={{width: 415, height: 400,fontSize: 30, backgroundColor: 'powderblue'}}
          placeholder="Write about your day"
          multiline={true}
          onChangeText={(text) => this.setState({text})}
      />
      <TextInput
          style={{width: 415, height: 250,fontSize: 30, backgroundColor: 'orange'}}
          placeholder="Write something you're grateful for"
          multiline={true}
          onChangeText={(text) => this.setState({text})}
      />
      <Button
        onPress={() => {
        Alert.alert('Great Job!');
        }}
        title="Finish Entry"
      />
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
      justifyContent: 'center',
      marginTop: 10,
      backgroundColor: '#ffffff',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#ddd'
  }
});

export default JournalEntry;