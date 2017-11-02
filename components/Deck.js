import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Animated} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Quiz from './Quiz.js';
import AddCard from './AddCard.js';
import {getDeck} from '../utils/api.js';
import {connect} from 'react-redux';
import styles from '../styles/';

class Deck extends Component {

    state = {
          opacity: new Animated.Value(0),  
      }
  

  componentDidMount() {
    Animated.timing(                  
      this.state.opacity,            
      {
        toValue: 1,                   
        duration: 5000,              
      }
    ).start();                        
  }
  
	render() {
    const deck = this.props.decks[this.props.navigation.state.params.key];
    const {title,questions} = deck;
    
		return (
      <Animated.View style={{flex: 1, justifyContent: 'flex-start', backgroundColor: '#fff', 
      alignItems: 'stretch', opacity: this.state.opacity}}>
       <Text style={[styles.header]}>{title}</Text>
        <Text style={[styles.subtitle2]}>{questions.length} cards</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCard',{title: title})}>
          <Text style={[styles.btnAdd]}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz',{questions: questions})}>
          <Text style={[styles.btnQuiz]}>Start Quiz</Text>
        </TouchableOpacity>
    </Animated.View>
		)
	}

}

const mapStateToProps = (state)=> ({
    decks: state

});

export default connect(mapStateToProps)(Deck)