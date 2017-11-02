import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator,StackNavigator} from 'react-navigation';
import Decks from '../components/Decks.js';
import Deck from '../components/Deck.js';
import AddCard from '../components/AddCard.js';
import Quiz from '../components/Quiz.js';
import New from '../components/New.js';

const Tabs = TabNavigator({
  Decks: {screen: Decks},
  New: {screen: New},
},{
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    labelStyle: {
      fontSize: 20,
    },
    style: {
      height: 56, 
      backgroundColor: 'white',
    },
    tabStyle: {
      backgroundColor: '#FF4500',
    }
    
  }
});

export const MainNavigator = StackNavigator({
   Home: {
     screen: Tabs,
   },
   Deck: {
     screen: Deck,
     navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.key}`,
      headerStyle: {backgroundColor: 'black'},
      headerTitleStyle: {color: 'white'},
      headerTintColor: 'white'
    }),
   },
   Quiz: {
    screen: Quiz,
    navigationOptions: ({navigation}) => ({
      title: 'Quiz',
      headerStyle: {backgroundColor: 'black'},
      headerTitleStyle: {color: 'white'},
      headerTintColor: 'white'
    }),
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({navigation}) => ({
      title: 'Add card',
      headerStyle: {backgroundColor: 'black'},
      headerTitleStyle: {color: 'white'},
      headerTintColor: 'white'
    }),
  }
 })
