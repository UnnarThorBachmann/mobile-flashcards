import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,TextInput} from 'react-native';
import {saveDeckTitle} from '../utils/api.js';
import styles from '../styles/';

export default class QuizEnd extends Component {
  componentDidMount() {
  	clearLocalNotification();
    /*
      from class.
      Should be used to get local notifications daily.
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(20);
      tomorrow.setMinutes(0);
      setLocalNotification(tomorrow,'day');
     */
    setLocalNotification(Date.now() + 5*60*1000,'minute');
  }

  render() {
  	 return (
        <View style={styles.container}>
          <Text style={styles.header}>Finished! {score} of {n}</Text>
           <TouchableOpacity style={styles.btnBack} onPress={()=> this.setState({index: 0,
              flip: false,
              n: this.props.navigation.state.params.questions.length,
              score: 0
            })}>
          <Text style={styles.btnText}>Restart Quiz</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.btnBack} onPress={()=> this.props.navigation.navigate('Deck')}>
          <Text style={styles.btnText}>Back to Deck</Text>
        </TouchableOpacity>
        </View>
      )
  }

}